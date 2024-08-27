// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return license ? `![Static Badge](https://img.shields.io/badge/${license}-license-red)` : '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No License") {
    return license ? `This project uses the ${license} license.` : '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `## Licence
  
  ${renderLicenseLink(license)}` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.test}


${renderLicenseSection(data.license)}

## Questions
If you have any questions, please feel free to reach out at <a href="mailto:${data.email}">${data.email}</a> or on <a href="https://github.com/${data.github}">Github</a>


`;
}

module.exports = generateMarkdown;
