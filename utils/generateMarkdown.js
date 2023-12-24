// Apache license = https://img.shields.io/badge/license-Apache_2.0-green
// MIT license = https://img.shields.io/badge/license-MIT-yellow

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// no license = '';
// options: Apache 2.0, MIT, None
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// no license = '';
// options: Apache 2.0, MIT, None
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// no license = '';
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// license section will include data from functions above
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Useage](#useage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Useage
  ${data.useage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me at:
  GitHub: ${data.github}
  my email: ${data.email} 
`;
}
// allows generateMarkdown function to be exported to index.js file
module.exports = generateMarkdown;
