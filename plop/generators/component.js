const templatesPath = "templates/component";
const componentsPath = "../src/components";

module.exports = {
  description: "presentational component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
  ],
  actions: [
    {
      type: "addMany",
      destination: `${componentsPath}/{{ name }}`,
      base: templatesPath,
      templateFiles: `${templatesPath}/*.js`,
      skipIfExists: true,
    },
    {
      type: "append",
      path: `${componentsPath}/index.js`,
      templateFile: `${templatesPath}/indexAppend.txt`,
    },
  ],
};
