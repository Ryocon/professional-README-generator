// packages that are required for this application to run correctly
const inquirer = require('inquirer')

const fs = require('fs')

// link to generateMarkdown.js which is exported from its own file
const generateMarkdown = require('./utils/generateMarkdown')

// an array of questions for the user to provide input data for the readme to generate from
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (input) => {
            if (!input) {
                return 'Please provide a project title'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please add a description of your project',
        name: 'description',
        validate: (input) => {
            if (!input) {
                return 'Please provide a description for your project'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please add installation instructions for your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage intructions and examples for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide collaborators information for this project',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Please provide testing information for this project',
        name: 'tests'
    },
    {
        // use of a list for the user to select a license from the licenses listed on github docs
        type: 'list',
        message: 'Please choose a license for your project',
        name: 'license',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',
            'None'
        ]
    },
    {
        // these inputs are added to the Questions section
        type: 'input',
        message: 'Please provide your Github username', 
        name: 'github',
        validate: (input) => {
            if (!input) {
                return 'Please provide a username'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide your email address',
        name: 'email',
        validate: (input) => {
            if (!input) {
                return 'Please provide an email address'
            } else {
                return true
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // ? ternary operator used instead of if else statement
    fs.writeFile(fileName, generateMarkdown(data), (err) => (err ? console.log(err) : console.log('File Written!')))

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('README.md', answers)
    
    })
}

// Function call to initialize app
init();
