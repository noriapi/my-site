// @ts-check
/**
 * @typedef {import("@actions/github").context } Context
 * @typedef {import("@actions/core")} Core
 * @typedef {ReturnType<import("@actions/github")["getOctokit"]>} GitHub
 */

/**
 * @param {Object} options - The options object.
 * @param {GitHub} options.github - The GitHub object.
 * @param {Context} options.context - The context object.
 * @param {Core} options.core - The core object.
 */
module.exports = async ({ github, context, core }) => {
  const commentIdStr = process.env["COMMENT_ID"];
  if (!commentIdStr) {
    throw new Error("COMMENT_ID environment variable is not set.");
  }
  const commentId = parseInt(commentIdStr);

  const {
    data: { body },
  } = await github.rest.issues.getComment({
    ...context.repo,
    comment_id: commentId,
  });

  const playwrightUrl = `${process.env["PAGE_URL"]}${context.runId}/playwright-report/index.html`;

  const newBody = `${body}

- [View playwright report](${playwrightUrl})
`;

  github.rest.issues.updateComment({
    ...context.repo,
    comment_id: commentId,
    body: newBody,
  });
};
