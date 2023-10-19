// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the Name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please describe your project by writing a dedescription details'
    },

    {
        type: 'list',
        name: 'license',
        message: 'what kind of license do you want to give your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what command would you like to run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to test?',
        default: 'npm test'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'please provide details to user about their contributions to the repo'
    },
    {
        type: 'input',
        name: 'github',
        message: 'please provide your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    }

];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();


const application = () => {
    inquirer.prompt(questions).then(answers => {
        try {
            fs.writeFileSync('dist/README.md', generateMarkdown(answers))
            console.log('congratulations your README.md file is now located in the dist folder, navigate there to view it')
        } catch (error) {
            console.log(error.message)
        }
    })

};

application();