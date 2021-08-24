const Employee = require('./Employee');

class Dentist extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole () {
        return "Dentist";
    }
}

module.exports = Dentist;