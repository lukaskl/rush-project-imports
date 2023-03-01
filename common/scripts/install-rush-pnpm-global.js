#!/usr/bin/env node

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const getRushJsonVersionValue = (fieldName) => {
  const rushJsonPath = path.normalize(path.join(__dirname, "../../rush.json"));

  try {
    const rushJsonContents = fs.readFileSync(rushJsonPath, "utf-8");
    // Use a regular expression to parse out the rushVersion value because rush.json supports comments,
    // but JSON.parse does not and we don't want to pull in more dependencies than we need to in this script.
    const rushJsonMatches = rushJsonContents.match(
      new RegExp(`\\"${fieldName}\\"\\s*\\:\\s*\\"([0-9a-zA-Z.+\\-]+)\\"`)
    );
    return rushJsonMatches[1];
  } catch (e) {
    throw new Error(
      `Unable to determine the required version from rush.json (${rushJsonPath}). ` +
        `The '${fieldName}' field is either not assigned in rush.json or was specified ` +
        "using an unexpected syntax."
    );
  }
};

const getRushVersion = () => getRushJsonVersionValue("rushVersion");
const getPnpmVersion = () => getRushJsonVersionValue("pnpmVersion");

const runShell = (command, args) => {
  console.log(`> ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, {
    stdio: "inherit",
    cwd: process.cwd(),
    env: process.env,
  });

  if (result.error) {
    throw result.error
  }
};

runShell("npm", ["install", "--global", `@microsoft/rush@${getRushVersion()}`]);
runShell("npm", ["install", "--global", `pnpm@${getPnpmVersion()}`]);
