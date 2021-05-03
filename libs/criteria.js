module.exports = [
    {"regex": "^.{9,}$", "message": "Password should be longer than 8 characters"},
    {"regex": "[A-Z]", "message": "Password should contain at least 1 uppercase letter"},
    {"regex": "[a-z]", "message": "Password should contain at least 1 lowercase letter"},
    {"regex": "[0-9]", "message": "Password should contain at least 1 number"}
];
