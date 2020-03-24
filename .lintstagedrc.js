module.exports = {
    '*.scss': [
        'stylelint --fix',
        'git add',
    ],
    '*.{(j|t)s?(x),.vue}': [
        'eslint --fix',
        'git add',
    ],
};
