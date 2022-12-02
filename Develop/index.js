// TODO: Include packages needed for this application

// Requiring needed packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// Array of questions for user to answer for README file
const questions =
[
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please Enter a Project Description:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please Enter Installation Instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please Any Enter Usage Information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who helped in contributing to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please Any Enter Test Instructions:'
    },
    {
        type: 'input',
        name: 'gituser',
        message: 'Please Enter Your GitHub UserName:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Enter Your Email Address:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose any licenses for your Application:',
        choices: ['None', 'Apache2.0', 'GNU', 'MIT', 'CreativeCommonsv1.0', 'MozillaPublicLicense2.0', 'TheUnlicense']
    }
  ]

// TODO: Create a function to write README file
// writes file using the generateMarkdown.js file and displaying message once README is generated and all prompts are answered
function writeToFile(fileName, data) {
    var dataStr = generateMD(data);
    fs.writeFile(fileName, dataStr, (err) => 
    err ? console.log(err) : console.log('Thank you, your README file has been generated!')
    );

}

// TODO: Create a function to initialize app
// intialized application and begins prompting the user to answer questions 
function init() {
    inquirer
    .prompt(questions)
    .then((data) => { 
    writeToFile("GeneratedREADME.md", data);
    })
}
// Function call to initialize app
init();
