const Validator = require('../../libs/Validator');

describe('Validator', () => {
    let regexString = 'test';
    let regex = new RegExp(regexString);
    let validator = new Validator(regex);

    describe('If the passed string matches the regex', () => {
        let stringToValidate = "test";

        it('should return true', () => {
            expect(validator.validatePassword(stringToValidate)).toBe(true);
        });
    });

    describe('If the passed string does not match the regex', () => {
        let stringToValidate = "fail";

        it('should return false', () => {
            expect(validator.validatePassword(stringToValidate)).toBe(false);
        });
    });
});
