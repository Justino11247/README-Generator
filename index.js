// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    message: ('What is the title of your project?'),
    name: 'title',
  },
  {
    type: 'input',
    message: ('Give a description of the application.'),
    name: 'description',
  },
  {
    type: 'input',
    message: ('Are there any installation instructions for this application?'),
    name: 'installation',
  },
  {
    type: 'input',
    message: ('Give some information about usage?'),
    name: 'usage',
  },
  {
    type: 'list',
    message: ('What License was used?'),
    name: 'license',
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT", "BSD 2-Clause ", "BSD 3-Clause", "Boost Software License 1.0", "No License",]
  },
  {
    type: 'input',
    message: ('How can someone contribute to this project?'),
    name: 'contributions',
  },
  {
    type: 'input',
    message: ('Are there any testing guidlines for this application?'),
    name: 'test',
  },
  {
    type: 'input',
    message: ('What is your Github username?'),
    name: 'github',
  },
  {
    type: 'input',
    message: ('What is your email address?'),
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => 
      writeToFile('generateREADME.md', data))
    .then(() => 
      console.log('README.md file has been created!'))
    .catch((err) => 
      console.log(err));
}

// Function call to initialize app
init();
