// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  // if statment to display the license badge based on the user's selection
  if(license === "None"){
    return ``
  } else {
    return `![licensebadge](https://img.shields.io/badge/License-${license}-blue)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // if statment to generate the link to the license page based on what the user selects
if(license === 'Apache2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if(license === 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if(license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if(license === 'CreativeCommonsv1.0') {
    return `https://creativecommons.org/publicdomain/zero/1.0/`
  } else if(license === 'MozillaPublicLicense2.0') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  } else if(license === 'TheUnlicense') {
    return `https://unlicense.org/`
  } else {
    ``
  }
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // if statement to generate the license section for the README file to display the license and the license link
  if(license === "None"){
     ``
  } else {
    return `## Licenses 
    This project used the following license ${license}. 
    Link to the license page ${renderLicenseLink(license)} `
  }

}

// TODO: Create a function to generate markdown for README
// Generates README file calling user inputs into the correct sections for the README file.  
function generateMarkdown(data) {

  return `
  # ${data.title}  

  ${renderLicenseBadge(data.license)}

  ## Table of Contents  
  
  -   [Project Description](#description)
  -   [Installation Instructions](#installation)
  -   [Usage Information](#usage)
  -   [Contributions](#contributions)
  -   [Testing](#testing)
  -   [Licenses](#licenses)
  -   [Questions](#questions)



  ## Description 
  
  ${data.description}  

  ## Installation 

  ${data.install}  

  ## Usage  

  ${data.usage}  

  ## Contributions  

   ${data.contribution} contributed to this project

  ## Testing   

  You can test this application by: ${data.test}  
   
  ${renderLicenseSection(data.license)}

  ## Questions  

  You can find me at my [GitHub](https://github.com/${data.gituser})  

  If you have any additional questions you may send them to my [email](mailto:${data.email}) 

`;
}

module.exports = generateMarkdown;
