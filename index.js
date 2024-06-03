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
    name: 'licence',
    choices: ["", "", "", "", "", "", "",]
  },
  {
    type: 'input',
    message: ('Were there any other contributors on this application?'),
    name: 'contributions',
  },
  {
    type: 'input',
    message: ('Are there any testing guidlines of this application?'),
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


// TODO: Create a function to initialize app


// Function call to initialize app
init();
