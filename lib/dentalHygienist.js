const Employee = require('./Employee');

class DentalHygienist extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Dental Hygienist";
    }
}

module.exports = DentalHygienist;