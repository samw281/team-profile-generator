// import employee constructor
const Employee = require("./Employee");

// intern constructor employee constructor
class Intern extends Employee {
    constructor(name,id,email,school){
        super(name, id, email);
        this.school = school;
    };
    getSchool = () => this.school;
    getRole = () => 'Intern';
};

module.exports = Intern;