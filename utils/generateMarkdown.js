function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "GNU General Public License v3.0":
      return `![GNU Badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "MIT License":
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "None":
      return "";
    default:
      return "";
  }
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License":
      return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return `[GNU License](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case "None":
      return "";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return `There are no licenses associated with this project.`;
  } else {
    return `This project uses the following license:
    ${renderLicenseLink(license)}`;
  }
}

function generateMarkdown(answers) {
  const {
    title,
    description,
    instillation,
    usage,
    license,
    contributing,
    tests,
    github,
    email,
  } = answers;
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)
  
  [Questions](#questions)

  ## Instillation
  ${instillation}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license)}

  ## Contributing
  Guidelines for contributing to this project:
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions about the project, please reach out via the following:

  [Github Profile](https://github.com/${github})

  ${email}
`;
}

module.exports = generateMarkdown;
