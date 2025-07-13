// @ts-check
/**
 * @typedef {import("@actions/github").context } Context
 * @typedef {import("@actions/core")} Core
 * @typedef {ReturnType<import("@actions/github")["getOctokit"]>} GitHub
 *
 * @typedef {Object} ArtifactItem
 * @property {number} id
 * @property {number} size_in_bytes
 * @property {boolean} expired
 * @property {string | undefined} digest
 * @property {{ id: number }} workflow_run
 * @property {string | null} created_at
 * @property {string | null} updated_at
 */

/**
 * @param {Object} options - The options object.
 * @param {GitHub} options.github - The GitHub object.
 * @param {Context} options.context - The context object.
 * @param {Core} options.core - The core object.
 */
module.exports = async ({ github, context }) => {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    throw new Error("GITHUB_TOKEN environment variable is not set.");
  }

  const { DefaultArtifactClient } = require("@actions/artifact");
  const pLimit = require("p-limit").default;
  const path = require("node:path");

  const artifactClient = new DefaultArtifactClient();
  const limit = pLimit(5);

  const downloadReports = async (/** @type {string} */ artifactName) => {
    /** @type {ArtifactItem[]} */
    // @ts-expect-error `listArtifactsForRepo` の型は少し緩い
    const artifacts = (
      await github.paginate(github.rest.actions.listArtifactsForRepo, {
        owner: context.repo.owner,
        repo: context.repo.repo,
        name: artifactName,
      })
    ).filter((a) => !a.expired);

    console.log(
      `Found artifact ${artifactName} IDs: ${JSON.stringify(artifacts.map((a) => a.id))}`,
    );

    // id でソート（降順）
    artifacts.sort((a, b) => b.id - a.id);

    // ダウンロードするアーティファクトを制限
    const MAX_SIZE_BYTES = 500 * 1024 * 1024; // 500MB
    const MAX_ARTIFACTS = 30;
    const { targetArtifacts } = artifacts.reduce(
      /**
       * @param {Object} acc
       * @param {ArtifactItem[]} acc.targetArtifacts
       * @param {number} acc.currentSize
       */
      (acc, artifact) => {
        if (
          acc.targetArtifacts.length < MAX_ARTIFACTS &&
          acc.currentSize + artifact.size_in_bytes <= MAX_SIZE_BYTES
        ) {
          acc.targetArtifacts.push(artifact);
          acc.currentSize += artifact.size_in_bytes;
        }
        return acc;
      },
      { targetArtifacts: [], currentSize: 0 },
    );

    console.log(
      `Download artifacts IDs: ${JSON.stringify(targetArtifacts.map((a) => a.id))}`,
    );

    const tasks = targetArtifacts
      .map((artifact) => async () => {
        const result = await artifactClient.downloadArtifact(artifact.id, {
          findBy: {
            token: githubToken,
            workflowRunId: artifact.workflow_run.id,
            repositoryOwner: context.repo.owner,
            repositoryName: context.repo.repo,
          },
          path: path.join(
            "reports",
            `${artifact.workflow_run.id}`,
            artifactName,
          ),
          expectedHash: artifact.digest,
        });
        if (result.digestMismatch) {
          throw new Error(
            `Artifact '${artifact.id}' digest validation failed. Please verify the integrity of the artifact.`,
          );
        }
      })
      .map(limit);

    return tasks;
  };

  const tasks = (
    await Promise.all(["playwright-report"].map(downloadReports))
  ).flat();

  await Promise.all(tasks);

  console.log(`Total of ${tasks.length} artifact(s) downloaded`);
};
