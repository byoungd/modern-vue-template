const rushLib = require("@microsoft/rush-lib");

const rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation();

const packageNames = [];
const packageDirNames = [];

rushConfiguration.projects.forEach((project) => {
  packageNames.push(project.packageName);
  const temp = project.projectFolder.split("/");
  const dirName = temp[temp.length - 1];
  packageDirNames.push(dirName);
});
// 保证 scope 只能为 all/package name/package dir name
const allScope = ["all", ...packageDirNames, ...packageNames];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", allScope],
  },
};
