module.exports = function (password) {
    // 1. Password should not be null
    if (password == null) {
        throw('A password must be provided');
    }
    // 2. Password should be larger than 8 chars
    if (password.length < 9) {
        throw('Password must be at least 9 characters long');
    }
    // 3. The password should have one uppercase letter at least
    if (!(/[A-Z]/.test(password))) {
        throw("Password must contain at least 1 uppercase letter")
    };
    // 4. The password should have one lowercase letter at least
    if (!(/[a-z]/.test(password))) {
        throw("Password must contain at least 1 lowercase letter")
    };
    // 5. The password should have one number at least
    if (!(/[0-9]/.test(password))) {
        throw("Password must contain at least 1 number")
    };

    // 🙌 Password meets criteria 🎉
    return true;
};
