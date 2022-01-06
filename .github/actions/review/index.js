const core = require('@actions/core');

try {
  const userID = core.getInput('user-id');
  console.log(`Hello ${userID}!`);
  core.setOutput("target-user-id", userID);
} catch (error) {
  core.setFailed(error.message);
}