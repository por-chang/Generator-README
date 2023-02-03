// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Requirements](#requirement)
  * [Usage](#usage)
  * [Contribution](*contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact-Me](#contact-me)
  ${renderLicenseSection(data.license)}
  ### Install
  \`\`\`
  ${data.instruction}
  \`\`\`
  ### Usage
  \`\`\`
  ${data.usage}
  \`\`\`
  ### Contribution
  \`\`\`
  ${data.contribution}
  \`\`\`
  ### Tests
  \`\`\`
  ${data.testing}
  \`\`\`
  ### Questions
  \`\`\`
  ${data.questions}
  \`\`\`
  ### GitHub Username
  \`\`\`
  ${data.github}
  \`\`\`
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
