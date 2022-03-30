const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { prompt } = require('inquirer');

const roles = {Manager:[],Engineer:[],Intern:[]};

prompt([
    {
        type: 'confirm',
        name: 'needRole',
        message: 'Would you like to fill a possion?'
    }
]).then(isRoleNeeded=>{
    isRoleNeeded
        ? fillPosition()
        : printHTML();
});

function fillPosition() {
    prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Which position would you like to fill?',
            choices: ['Manager','Engineer','Intern']
        }
    ]).then(({ position })=>{
        console.log(position);

        
    })
};

function printHTML() {
    
};

{ postion: 'Manager'}