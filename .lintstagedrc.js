module.exports = {
    '*.css': [
        'stylelint --fix',
        'git add',
    ],
    '*.(j|t)s?(x),': [
        'eslint --fix',
        'git add',
    ],
    '*.vue': [
        'eslint --fix',
        'git add',
    ],
};
