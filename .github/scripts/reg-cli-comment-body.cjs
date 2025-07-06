// @ts-check
/**
 * @typedef {import("@actions/github").context } Context
 * @typedef {import("@actions/core")} Core
 * @typedef {ReturnType<import("@actions/github")["getOctokit"]>} GitHub
 */

/**
 * @typedef {Object} RegReport
 * @property {Array<any>} passedItems
 * @property {Array<any>} diffItems
 * @property {Array<any>} newItems
 * @property {Array<any>} deletedItems
 */

/**
 * @param {Object} options - The options object.
 * @param {GitHub} options.github - The GitHub object.
 * @param {Context} options.context - The context object.
 * @param {Core} options.core - The core object.
 */
module.exports = async ({ github, context, core }) => {
  /** @type {RegReport} */
  // @ts-ignore
  const reg = require("./reg.json");
  const failed = process.env.FAILED === "true";
  const body = `
## reg-cli

<table>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">✅️ Pass</th>
      <td>${reg.passedItems.length}</td>
    </tr>
    <tr>
      <th scope="row">⚠️ Change</th>
      <td>${reg.diffItems.length}</td>
    </tr>
    <tr>
      <th scope="row">✨ New</th>
      <td>${reg.newItems.length}</td>
    </tr>
    <tr>
      <th scope="row">❓ Delete</th>
      <td>${reg.deletedItems.length}</td>
    </tr>
  </tbody>
</table>

${failed ? "{{body}}" : ""}
`;
  core.setOutput("body", body);

  // reg-cli が失敗していたらここでコメントを作成
  if (!failed) {
    const {
      data: { id },
    } = await github.rest.issues.createComment({
      ...context.repo,
      issue_number: context.issue.number,
      body: body,
    });

    core.setOutput("comment-id", String(id));
  }
};
