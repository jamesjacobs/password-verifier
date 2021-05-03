class Validator {
    constructor(regex) {
        this.regex = new RegExp(regex);
    }

    validatePassword(password) {
        return this.regex.test(password);
    }
}

module.exports = Validator;
