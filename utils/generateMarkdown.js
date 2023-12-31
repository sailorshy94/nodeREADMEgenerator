const badges = "https://img.shields.io/badge/";
const apacheBadge = "License-Apache_2.0-green";
const mitBadge = "License-MIT-yellow";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// no license = '';
// options: Apache 2.0, MIT, None
function renderLicenseBadge(license) {
  // if data.license === "Apache 2.0" then badges + apacheBadge
  // if data.license === "MIT" then badges + mitBadge
  // if data.license === "None" then ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// options: Apache 2.0, MIT, None
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if data.license === "Apache 2.0" then "This project is distributed under the Apache 2.0 license.";
  // if data.license === "MIT" then "This project is distributed under the MIT license.";
  // if data.license === "None" then "";
}


// license section will include data from functions above
function generateMarkdown(data) {
  // ${data.license} badge will go in line under
  return `# ${data.title}  
  ![Static Badge](https://img.shields.io/badge/License-Apache_2.0-green)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Useage](#useage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Useage
  ${data.useage}

  ## License
  This project is distributed under the ${data.license} license.


  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me at:  
  My GitHub Profile: https://github.com/${data.github}  
  My email address: ${data.email} 
`;
}
// allows functions to be exported to index.js file
module.exports = generateMarkdown;