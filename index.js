const Validator = require('./libs/Validator');
const defaultCriteria = require('./libs/criteria');

module.exports = function (password, minimumRequiredToPass = null, criteria = defaultCriteria) {

    // 1. Password should not be null
    if (!password) {
        throw('A password must be provided');
    }

    // 2. Assume all criteria is required if none passed
    if (!minimumRequiredToPass) {
        minimumRequiredToPass = criteria.length + 1;
    }

    // 3. Build up results / errors
    let validationResults = {'success': 0, 'errors': []};

    criteria.map(criteria => {
        const validator = new Validator(criteria.regex);
        if (validator.validatePassword(password)) {
            validationResults.success++;
        } else {
            validationResults.errors.push(criteria.message);
        };
    });

    // 4. Check minimum number of required criteria is met
    if (validationResults.success >= minimumRequiredToPass) {
        // 🙌 Password meets criteria 🎉
        return true;
    } else {
        // 🚨 We've got issues 🚨
        throw(validationResults.errors);
    }
};
