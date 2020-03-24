module.exports = {
    '*.{scss,vue}': [
        'npm run stylelint --fix',
        'git add',
    ],
    '*.{(j|t)s?(x),vue}': [
        'npm run eslint:fix',
        'git add',
    ],
};
