// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import js from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the application?'
    },
    {
        type: 'input',
        name: 'installation',
        messgae: 'How to install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'WHat is the usage of the application?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to the application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the application?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is used?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent = `
    # ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributions}

    ## License
    This project uses the ${data.licensen} license.
`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
