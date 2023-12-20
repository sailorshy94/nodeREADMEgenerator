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
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
])
.then((response) => {
    console.log(response);
});
return;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
