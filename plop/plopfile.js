const { ComponentGenerator } = require("./generators");

module.exports = plop => {
  plop.setGenerator("component", ComponentGenerator);
};
