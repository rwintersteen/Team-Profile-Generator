// get employee info

// classes:

class Employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;

    }
}

class Team {
    constructor(){
        manager = '';
        engineer = [];
        intern = [];
    };
    promptForManager(){
        
    }

}

class Manager extends Employee {
    constructor(name, email, id, officeNum){
        super(name, email, id);
        this.officeNum = officeNum;
    }
}

class Engineer extends Employee {
    constructor(name, email, id, github){
    super(name, email, id);
    this.guthub = guthub;
    }
}

class Intern extends Employee {
    constructor(name, email, id, school){
    super(name, email, id);
    this.school = school;
    }
}

const karen = new Manager('Karen', 'karen@email.com', '123');


    // getName()

    // getId()

    // getEmail()

    // getRole()—returns 'Employee'

// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.

// The first class is an Employee parent class with the following properties and methods:



// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'


// // 