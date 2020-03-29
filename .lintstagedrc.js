module.exports = {
    '*.{scss,vue}': [
        'npm run stylelint',
        'git add',
    ],
    '*.{(j|t)s?(x),vue}': [
        'npm run eslint',
        'git add',
    ],
}
