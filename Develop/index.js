// TODO: Include packages needed for this application
const inquirerPkg = require('inquirer');
const fsPkg = require('fs');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirerPkg
  .prompt([
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
        message: 'Please Any Enter Contribution Guidelines:'
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
        type: 'checkbox',
        name: 'license',
        message: 'Please choose any licenses for your Application:',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    }
  ])
   .then((data)
        )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
