const verifyPassword = require('../index');

describe('When no password is provided', () => {
    let password = null;

    it('should throw an error', () => {
        expect(() => {verifyPassword(password); }).toThrow('A password must be provided');
    });
});

describe('When a password is provided and there is a minimum number of criteria', () => {
    let minimumNumberOfCriteria = 3;

    describe('if the password meets the minimum number of criteria', () => {
        let password = 'AbCDEFGH1';

        it('should return true', () => {
            expect(verifyPassword(password, minimumNumberOfCriteria)).toBe(true);
        });
    });

    describe('If one requirement (number) is met but others are not', () => {
        let password = '1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter',
                'Password must contain at least 1 lowercase letter'
            ]);
        });
    });

    describe('If one requirement (upper) is met but others are not', () => {
        let password = 'A';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password must contain at least 1 lowercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If one requirement (lower) is met but others are not', () => {
        let password = 'a';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two criteria (length and lower) are met but others are not', () => {
        let password = 'aaaaaaaaa';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should contain at least 1 uppercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two criteria (length and upper) are met but others are not', () => {
        let password = 'AAAAAAAAA';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password must contain at least 1 lowercase letter',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two criteria (length and number) are met but others are not', () => {
        let password = '111111111';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should contain at least 1 uppercase letter',
                'Password must contain at least 1 lowercase letter'
            ]);
        });
    });

    describe('If two criteria (lower and upper) are met but others are not', () => {
        let password = 'Ab';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 number'
            ]);
        });
    });

    describe('If two criteria (lower and number) are met but others are not', () => {
        let password = 'a1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password should contain at least 1 uppercase letter'
            ]);
        });
    });

    describe('If two criteria (upper and number) are met but others are not', () => {
        let password = 'A1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password should be longer than 8 characters',
                'Password must contain at least 1 lowercase letter'
            ]);
        });
    });

    describe('If all but the required criteria are met', () => {
        let password = 'AAAAAAAA1';

        it('should throw an array of errors', () => {
            expect(() => {verifyPassword(password, minimumNumberOfCriteria)}).toThrow([
                'Password must contain at least 1 lowercase letter'
            ]);
        });
    });
});
