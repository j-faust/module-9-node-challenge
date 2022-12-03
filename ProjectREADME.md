# Module 9 Challenge - Professional README Generator - Node.JS

# Table of Contents

- [Project Description](#description)
- [Installation](#installation)
- [NodeJS](#node)
- [Links](#links)
- [Demo](#demo)
- [Questions](#questions)

## Description 

The purpose of this project is to generate a professional README file using Node.JS to prompt the user for questions required to generate the README file.  The also required using NPM and the NPM Inquirer Package to assist with prompting the user for the information. 

## Installation

This project requires Node.JS NPM Package and NPM Inquirer to be installed for this application to work.

## Node

Added Questions array to store prompts that the user will need to answer. In addition the following functionality was added to the index.JS file: 
    * Utilized the File Storage ('fs') to write the README file for the user.  
    * Utilited Inquirer and '.prompt' to prompt the user with the array of questions and then to write the 'SampleREADME.md' file using the data from the questions. 

In the 'generateMarkdown.js' file:
    * A function to generate a badge for the license that the user selects from the prompts.
    * Another function for rendering the license link was made using logic to display the link to the license page 
    * A third function was made using logic to display the license section in the README file.  It will display the license that was selected and the link to the license page. 

## Links 

Link to Demo Video: [Video Demo](https://drive.google.com/file/d/1GadAscBtBD1M7djZfx_HAAz0xr7P_jxQ/view)

GitHub Link: [GitHub](https://github.com/j-faust/module-9-node-challenge)

## DEMO

![DemoGif](./Develop/images/demo.gif)


## Questions

Please vist my [GitHub](https://github.com/j-faust) to see more projects 

Please [Email](mailto:jfaust16@gmail.com) with any questions