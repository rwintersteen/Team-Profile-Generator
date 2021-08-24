const Employee = require('./Employee');

class DentalAssistant extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Dental Assistant";
    }
}

module.exports = DentalAssistant;