// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "![licenseBadge](https://img.shields.io/static/v1?label=GitHub&message=${answer}&color=lightgrey)";

  if(data.license !== "" || data.license !== null || data.license !== undefined){
    return ""
  } else {
    return badge
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(data.license !== "" || data.license !== null || data.license !== undefined){
    return ""
  } else {
    
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(data.license !== "" || data.license !== null || data.license !== undefined){
    return ""
  } else {

  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  # Table of Contents  
  
    * [Description](#description)
    * [Installation Instructions](#installation-instructions)
    * [Usage Information](#usage-information)
    * [Contribution Guidelines](#contribution-guidelines)
    * [Test Instructions](#test-instructions)
    * [Licenses](#project-licenses)
    * [Questions](#questions)



  # Description  
  
  ${data.description}  

  # Installations Instructions 

  ${data.install}  

  # Usage Information  

  ${data.usage}  

  # Contribution Guidelines  

  You can constribute to this project by ${data.contribution}  

  # Test Instructions   

  ${data.test}  

  # Project Licenses   

  The following licenses were used for this project: ${data.license}  

  # Questions  

  You can find me at my ![GitHub](https://github.com/${data.gituser})  

  If you any additional questions you may send them to my email @ [${data.email}](mailto:${data.email}) 

`;
}

module.exports = generateMarkdown;
