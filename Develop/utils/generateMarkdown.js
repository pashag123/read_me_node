// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n\n ${renderLicenseBadge(data.license)} \n\n
 ## Description \n\n ${data.description} \n\n

 ## Table of Contents \n\n

 - [installation](#installation) \n

 - [usage](#usage) \n

 - [credits](#credits) \n

 ${renderLicenseLink(data.license)} \n\n
 
 
 ## installation \n\n $
 
 
 
 
 `;
}

module.exports = generateMarkdown;
