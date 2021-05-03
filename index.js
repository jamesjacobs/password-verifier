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
    let validationResults = {'success': 0, 'errors': [], 'critical': 0};

    criteria.map(criteria => {
        const validator = new Validator(criteria.regex);
        if (validator.validatePassword(password)) {
            validationResults.success++;
        } else {
            validationResults.errors.push(criteria.message);

            // 🚨 A required criteria was not met 🚨
            if (criteria.required) {
                // We could stop and throw an error here to meet extra consideration 1 as
                // the required crtieria has not been met. However, from a UI point of view,
                // I'd rather display all the errors so that the user can see all requirements
                // rather than one at a time when typing assuming this would be used to display
                // errors / a checklist for a password input in a UI
                validationResults.critical++;
            }
        }
    });

    // 4. Check minimum number of required criteria is met and no critical errors
    if ((validationResults.success >= minimumRequiredToPass) && validationResults.critical === 0) {
        // 🙌 Password meets criteria 🎉
        return true;
    } else {
        // 🚨 We've got issues 🚨
        throw(validationResults.errors);
    }
};
