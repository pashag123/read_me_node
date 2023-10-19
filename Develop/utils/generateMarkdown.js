// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license !== 'none') {
return ``

}



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)} 

  ## Description
 
 ${data.description} 
 
 ## Table of Contents 
 
 - [installation] (#installation) 
 
 - [usage] (#usage) 
 
 - [credits] (#credits) 

 ${renderLicenseLink(data.license)} 

 ## installation 
 
 ${data.installation} 

 ## usage 
 
 ${data.usage} 

 ## test 
 
 ${data.test} 

 ## credits 
 
 ${data.credit} 

 ## contributing 
 
 ${data.contributing} 

 ${renderLicenseSection(data.license)}

 ## questions 

 if you have any questions see my email at ${data.email} and github at [https://github.com/pashag123](${data.github})
  `;
}

module.exports = generateMarkdown;
