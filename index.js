// import fetch from "node-fetch";
const fs = require('fs');
const inquirer = require('inquirer');
// import { inquirer } from 'inquirer';

// Function to prompt user for input
async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GNU', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

// Function to generate the README content
function generateReadme(answers) {
  return `
# ${answers.projectTitle}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license} License.

## Contributing

Contributions are welcome! Please refer to the [Contributing Guidelines](CONTRIBUTING.md).

## Tests

${answers.tests}

## Contact

Contact me at ${answers.email}.

GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
`;
}

// Main function
async function main() {
  try {
    const userAnswers = await promptUser();
    const readmeContent = generateReadme(userAnswers);

    fs.writeFileSync('README.md', readmeContent, 'utf-8');
    console.log('README.md file generated successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();