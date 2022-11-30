// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license !== "" || license !== null || license !== undefined){
    return ``
  } else {
    return `![licensebadge](https://img.shields.io/badge/license-${license}-blue
    )`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

if(license == 'Apache License 2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } else if(license == 'GNU General Public License v3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  } else if(license == 'MIT License') {
    return `https://opensource.org/licenses/MIT`;
  } else if(license == 'Creative Commons Zero v1.0 Universal') {
    return `https://creativecommons.org/publicdomain/zero/1.0/`;
  } else if(license == 'Eclipse Public License 2.0') {
    return `https://www.eclipse.org/legal/epl-2.0/`;
  } else if(license == 'Mozilla Public License 2.0') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`;
  } else if(license == 'The Unlicense') {
    return `https://unlicense.org/`;
  } else {
    ``
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "" || license !== null || license !== undefined){
    return ``
  } else {
    return `## Licenses 
    This project used the following license ${license}. ${renderLicenseLink(license)} `;
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

  ${renderLicenseBadge(data.license)}

  ## Table of Contents  
  
    - [Description](#description)
    - [Installation Instructions](#installation)
    - [Usage Information](#usage)
    - [Contribution Guidelines](#contributions)
    - [Test Instructions](#testing)
    - [Licenses](#licenses)
    - [Questions](#questions)



  ## Description 
  
  ${data.description}  

  ## Installation 

  ${data.install}  

  ## Usage  

  ${data.usage}  

  ## Contribution  

  You can constribute to this project by ${data.contribution}  

  ## Testing   

  ${data.test}  
   
  ${renderLicenseSection(data.license)}

  ## Questions  

  You can find me at my [GitHub](https://github.com/${data.gituser})  

  If you have any additional questions you may send them to my [email](mailto:${data.email}) 

`;
}

module.exports = generateMarkdown;
