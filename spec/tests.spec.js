const verifyPassword = require('../index');

describe('When no password is provided', () => {
    let password = null;

    it('should throw an error', () => {
        expect(() => {verifyPassword(password); }).toThrow('A password must be provided');
    });
});

describe('When a password is provided', () => {
    describe('if the password has less than 9 chars', () => {
        let password = 'abcdefgh';

        it('should throw an error', () => {
            expect(() => {verifyPassword(password)}).toThrow('Password must be at least 9 characters long');
        });
    });

    describe('if the password is missing an uppercase letter', () => {
        let password = 'abcdefghi';

        it('should throw an error', () => {
            expect(() => {verifyPassword(password)}).toThrow('Password must contain at least 1 uppercase letter');
        });
    });

    describe('if the password is missing a lowercase letter', () => {
        let password = 'ABCDEFGHI';

        it('should throw an error', () => {
            expect(() => {verifyPassword(password)}).toThrow('Password must contain at least 1 lowercase letter');
        });
    });

    describe('if the password is missing at least one number', () => {
        let password = 'AbCDEFGHI';

        it('should throw an error', () => {
            expect(() => {verifyPassword(password)}).toThrow('Password must contain at least 1 number');
        });
    });

    describe('if the password meets the criteria', () => {
        let password = 'AbCDEFGH1';

        it('should return true', () => {
            expect(verifyPassword(password)).toBe(true);
        });
    });
});
