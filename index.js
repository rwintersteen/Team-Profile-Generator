const inquirer = require('inquirer');
const fs = require('fs');
const Dentist = require('./lib/Dentist');
const DentalHygienist = require('./lib/DentalHygienist');
const DentalAssistant = require('./lib/DentalAssistant');
const path = require('path');

const OUTPUT_DIR=path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.HTML');
const render = require('./src/generateHTML');

const teamMembers = [];

function teamQuestions() {
    
        function createDentist() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the dentist's name? Please include credentials after the name",
                        name: 'dentistName',
                    },
                    {
                        type: 'input',
                        message: "What is the dentist's Employee ID number?",
                        name: 'hygienistId',
                    },
                    {
                        type: 'input',
                        message: "What is the dentist's email?",
                        name: 'dentistEmail',
                    },
                    {
                        type: 'input',
                        message: "What is the dentist's office number?",
                        name: 'dentistOffice',
                    },
                ]).then(answers => {
                    const dentist = new Dentist(answers.dentistName, answers.dentistId, answers.dentistEmail, answers.dentistOffice)
                    teamMembers.push(dentist)
                    createTeam()
                })
        function createTeam(){
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: "Which type of team member would you like to add?",
                    choices: [
                        "Dental Hygienist",
                        "Dental Assistant",
                        "Done adding team members"
                    ]
                }
            ]).then(userChoice => {
                if (userChoice.memberChoice === "Dental Hygienist") {
                    addDentalHygienist()
                } else if (userChoice.memberChoice === "Dental Assistant") {
                    addDentalAssistant()
                } else {
                    buildTeam()
                }
            });
        }
        function addDentalHygienist() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the dental hygienist's name?",
                        name: 'hygienistName',
                    },
                    {
                        type: 'input',
                        message: "What is the dental hygienist's Employee ID number?",
                        name: 'hygienistId',
                    },
                    {
                        type: 'input',
                        message: "What is the dental hygienist's email?",
                        name: 'hygienistEmail',
                    },
                    {
                        type: 'input',
                        message: "What is the dental hygienist's home office?",
                        name: 'hygienistOffice',
                    },
                ]).then(answers => {
                    const dentalHygienist = new DentalHygienist(answers.hygienistName, answers.hygienistId, answers.hygienistEmail, answers.hygienistOffice)
                    teamMembers.push(dentalHygienist)
                    createTeam()
                })
        }
        function addDentalAssistant() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the dental assistant's name?",
                        name: 'assistantName',
                    },
                    {
                        type: 'input',
                        message: "What is the dental assistant's Employee ID number?",
                        name: 'assistantId',
                    },
                    {
                        type: 'input',
                        message: "What is the dental assistant's email?",
                        name: 'assistantEmail',
                    },
                    {
                        type: 'input',
                        message: "What is the dental assistant's home office?",
                        name: 'assistantOffice',
                    },
                ]).then(answers => {
                    const dentalAssistant = new DentalAssistant(answers.assistantName, answers.assistantId, answers.assistantEmail, answers.assistantOffice)
                    teamMembers.push(dentalAssistant)
                    createTeam()
                })
        }
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    createDentist();
}
    teamQuestions();