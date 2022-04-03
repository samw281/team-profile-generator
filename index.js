const fs = require('fs');
const inquirer = require('inquirer');

const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const generateHTML = require("./src/generateHTML");

const rolesArr = []

const addManager = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter your managers name",
          validate: (nameInput) => {
            return nameInput
              ? true
              : console.log("Please enter the manager's name!");
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the manager's ID:",
          validate: (idInput) => {
            return idInput ? true : console.log("Please enter the manager's ID!");
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the manager's email:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Please enter the manager's office number:",
          validate: (officeNumberInput) => {
            return isNaN(officeNumberInput)
              ? (console.log("Please enter an office number!"), false)
              : true;
          },
        },
      ])
      .then((managerInput) => {
        // destructure for manager data
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
  
        // push manager to role array
        rolesArr.push(manager);
        console.log(manager);
      });
  };
  
  // employee inquirer prompts
const addEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please choose your employee's role:",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?",
          validate: (nameInput) => {
            return nameInput
              ? true
              : console.log("Please enter an employee's name");
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the employee's ID:",
          validate: (idInput) => {
            return idInput
              ? true
              : console.log("Please enter the employee's ID!");
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee's email:",
        },
        {
          type: "input",
          name: "github",
          message: "Please enter the employee's GitHub username:",
          when: (input) => input.role === "Engineer",
          validate: (githubInput) => {
            return githubInput
              ? true
              : console.log("Please enter the employee's GitHub username!");
          },
        },
        {
          type: "input",
          name: "school",
          message: "Please enter the employee's school:",
          when: (input) => input.role === "Intern",
          validate: (schoolInput) => {
            return schoolInput
              ? true
              : console.log("Please enter the employee's school!");
          },
        },
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would  you like to add more team members?",
          default: "false",
        },
      ])
      .then((employeeInput) => {
        // destructuring for employee data
        let { name, id, email, role, github, school, confirmAddEmployee } =
          employeeInput;
        let employee;
  
        // if role is engineer then add new engineer class with destructured data
        if (role === "Engineer") {
          employee = new Engineer(name, id, email, github);
          // if role is intern then add new intern class with destructured data
        } else if (role === "Intern") {
          employee = new Intern(name, id, email, school);
        }
  
        rolesArr.push(employee);
  
        if (confirmAddEmployee) {
          return addEmployee(rolesArr);
        } else {
          return rolesArr;
        }
      });
  };

  // generate HTML page using node file system
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      // if error is true
      if (err) {
        console.log(err);
        return;
        // Once profile is created
      } else {
        console.log(
          "Your team profile has been created! Please look at index.html to view it!"
        );
      }
    });
  };

// Calling addManager
addManager()
  // Once addManager is done, then addEmployee is called
  .then(addEmployee)
  // Once addEmployee is done, then push both addManager, and addEmployee data to teamArr
  .then((rolesArr) => {
    // Generate HTML page once teamArr has data
    return generateHTML(rolesArr);
  })
  // Once page is generated, then use pageHTML data
  .then((pageHTML) => {
    // call writeFile with pageHTML data, which will then write the index.html
    return writeFile(pageHTML);
  })
  // Catchiung any errors and console.log them
  .catch((err) => {
    console.log(err);
  });