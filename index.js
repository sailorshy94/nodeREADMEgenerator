// added fs so can interact w/ file sys to create file w/ README data
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// 
const questions = inquirer.createPromptModule();

questions([
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please add a description for your project...(Why did you create this project/what problem does it solve/what did you learn?)',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide step-by-step instructions on how to install your project',
        name: 'installation',
    },
    // not sure where exactly/how exactly, table of contents will come into play here??
    {
        type: 'input',
        message: 'How to use your project? (Give examples/instructions of use)',
        name: 'useage',
    },
    {
        type: 'input',
        message: 'Please include any guidelines for how other developers may contribute to your project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please include any tests written for your project and provide examples on how to run them',
        name: 'tests',
    },
    // license badge goes @ top of README, notice added to License section of README that explains
    {
        type: 'checkbox',
        message: 'Please select a license for your project (if applicable)',
        choices: ['A', 'B', 'C'],
        name: 'license',
    },
    // GitHub and email go into the Questions section
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    }
])
    .then((data) => {
        console.log(data);
    });
return;

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
