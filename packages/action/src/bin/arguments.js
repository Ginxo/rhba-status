const { Command } = require("commander");

function getArgumentsObject() {
  const program = new Command();
  program
    .option(
      "-df, --definition-file <filePath or URL>",
      "Filesystem path or URL to the definition file."
    )
    .requiredOption("-t, --title <title>", "Project title.")
    .requiredOption("-st, --subtitle <subtitle>", "Project subtitle.")
    .option(
      "-o --outputFolderPath <folderPath>",
      "the path where the files should be stored",
      __dirname
    )
    .option("--token <token>", "the github token", process.env["GITHUB_TOKEN"])
    .option(
      "--baseBranchFilter <branch...>",
      "a list of base branches RegEx to filter pull requests from",
      []
    )
    .option("-d, --debug", "to enable debug logging mode.", undefined)
    .option(
      "-cb, --created-by <user>",
      "The user or system who generates the report",
      "local execution"
    )
    .option(
      "-cu, --created-url <url>",
      "The job's URL where the repor is generated",
      undefined
    )
    .option("-ju, --jenkinsUrl <url>", "The jenkins URL", undefined)
    .option("-job, --jobUrl <url...>", "A list of jenkins job URLs", undefined)
    .option("-jf, --jobFilter <regex>", "The regex to filter jobs", undefined)
    .option(
      "-cert, --certFilePath <filePath>",
      "The jenkins cert file",
      undefined
    )
    .parse();

  return { ...program.opts() };
}

module.exports = { getArgumentsObject };
