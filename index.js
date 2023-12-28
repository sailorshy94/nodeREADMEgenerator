// added fs so can interact w/ file sys to create file w/ README data
const fs = require('fs');
const inquirer = require('inquirer');
// added a const variable for markdown file with require() to import generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const md = generateMarkdown(data);
    // if statement creates a new folder for output
    if (!fs.existsSync('./md-output')) {
        fs.mkdirSync('./md-output');
    };
    // writes a readme file and places inside of the mdoutput folder
    fs.writeFile('./md-output/README.md', md, err => {
        if (err) {
            console.error(err);
        }
    });
};

// shifted prompt module into the init functio
function init() {
    // questions var assigned to createPromptModule method attached to inquirer var
    const questions = inquirer.createPromptModule();
    // questions to output info for README sections
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
        {
            type: 'rawlist',
            message: 'Please select a license for your project (if applicable)',
            choices: [
                'Apache 2.0',
                'MIT',
                'None',
            ],
            name: 'license',
        },
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
        // console log properly logs data into an array in terminal
        .then((data) => {
            console.log(data);
            // function creates md-output directory and README file within; passes user data from terminal
            writeToFile('README.md', data);
        });
};

// Function call to initialize app
init();