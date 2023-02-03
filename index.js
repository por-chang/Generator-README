// Package Needed for this Application to Generate a README.md
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Creating Questions in Regards to your User Stories
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Tiltle Name for your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description about and the function of your project?'
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'What are the instruction for your project install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information is needed to use the project/application?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is kind of license do you like to use for this project?',
        choices: ["MIT", "APACHE2.0", "Others", "None"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute towards project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How users will run test on the appliation/projects?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions on the project?'
    },        
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
   
]
// Write README.md File
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Initializing App
async function init() {
    const responses = await inquirer.prompt(questions)
    const data = generateMarkdown({ ...responses })
    console.log('Generating Readme.')

    writeToFile('README.md', data)

}
init();
