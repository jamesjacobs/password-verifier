const verifyPassword = require('../index');

describe('When no password is provided', () => {
    it('should throw an error');
});

describe('When a password is provided', () => {
    describe('if the password has less than 9 chars', () => {
        it('should throw an error');
    });

    describe('if the password is missing an uppercase letter', () => {
        it('should throw an error');
    });

    describe('if the password is missing a lowercase letter', () => {
        it('should throw an error');
    });

    describe('if the password is missing at least one number', () => {
        it('should throw an error');
    });

    describe('if the password meets the criteria', () => {
        it('should return true');
    });
});
