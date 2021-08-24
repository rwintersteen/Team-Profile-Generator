const Employee = require('./Employee');

class DentalHygienist extends Employee {
    constructor (name, id, email) {
        super (name, id, email);
    }
    getRole () {
        return "Dental Hygienist";
    }
}

module.exports = DentalHygienist;