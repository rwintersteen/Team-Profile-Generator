const Employee = require('./Employee');

class Dentist extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Dentist";
    }
}

module.exports = Dentist;