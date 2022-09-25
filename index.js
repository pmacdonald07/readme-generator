// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the title of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "instillation",
    message: "What are the installation requirements for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will people use your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license is your project covered under? (Required)",
    choices: [
      "Apache License",
      "GNU General Public License v3.0",
      "MIT License",
      "None",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please enter a license associated with your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "What are the contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "What tests have you created for your project, and what are the instructions for using them?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message:
      "What email address should users send their questions to? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser().then((data) => {
  console.log(data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
