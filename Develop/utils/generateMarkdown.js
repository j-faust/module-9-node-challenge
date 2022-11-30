// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license === "None"){
    return ``
  } else {
    return `![licensebadge](https://img.shields.io/badge/License-${license}-blue)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

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
  if(license === "None"){
     ``
  } else {
    return `## Licenses 
    This project used the following license ${license}. ${renderLicenseLink(license)} `
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

`
}

module.exports = generateMarkdown;
