const verifyPassword = require('../index');

describe('When no password is provided', () => {
    let password = null;

    it('should throw an error', () => {
        expect(() => {verifyPassword(password); }).toThrow('A password must be provided');
    });
});

describe('When a password is provided and there is a minimum number of requirements', () => {
    let minimumNumberOfRequirements = 3;

    describe('if the password meets the minimum number of criteria', () => {
        let password = 'AbCDEFGH1';

        it('should return true', () => {
            expect(verifyPassword(password, minimumNumberOfRequirements)).toBe(true);
        });
    });

    describe('If one requirement (number) is met but others are not', () => {
        let password = '1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 lowercase letter'
            ]);
        });
    });

    describe('If one requirement (upper) is met but others are not', () => {
        let password = 'A';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 lowercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If one requirement (lower) is met but others are not', () => {
        let password = 'a';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two requirements (length and lower) are met but others are not', () => {
        let password = 'aaaaaaaaa';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two requirements (length and upper) are met but others are not', () => {
        let password = 'AAAAAAAAA';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should contain at least 1 lowercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two requirements (length and number) are met but others are not', () => {
        let password = '111111111';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 lowercase letter'
            ]);
        });
    });

    describe('If two requirements (lower and upper) are met but others are not', () => {
        let password = 'Ab';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two requirements (lower and number) are met but others are not', () => {
        let password = 'a1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter'
            ]);
        });
    });

    describe('If two requirements (upper and number) are met but others are not', () => {
        let password = 'A1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfRequirements)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 lowercase letter'
            ]);
        });
    });
});
