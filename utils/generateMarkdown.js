// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
// the function generates a badge from the list and uses the split and join method to remove spaces and add underscores in order for the badge to generate correctly
function renderLicenseBadge(license) {
  if (license != 'None') {
    console.log(license)
    return `<img src=https://img.shields.io/badge/License-${license.split(' ').join('_')}-orange.svg>`
  } else {
    return ''
  }

}

// function that returns the license link
// If there is no license, returns an empty string
// generates the output in best practice markdown
function renderLicenseLink(license) {
  if (license != 'None') {
    return `- [License](#license)`
  } else {
    return ''
  }

}

// function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `This project uses the ${license} license.`
  } else {
    return 'No license is used for this project'
  }
}

// function to generate markdown for README
// populated from the data gathered in inquirer and written to the readme file generated using fs in index.js
function generateMarkdown(data) {
  return `

  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions please contact via Github or email.

  Github - https://github.com/${data.github}

  Email - ${data.email}

`;
}

module.exports = generateMarkdown;
