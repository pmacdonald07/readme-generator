// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License":
      return `[Apache Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "GNU General Public License v3.0":
      return `![GNU Badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "MIT License":
      return `[MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License":
      return `[Apache License Link](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return `[GNU License Link](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[MIT License Link](https://opensource.org/licenses/MIT)`;
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
