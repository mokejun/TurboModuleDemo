module.exports = {
    arrowParens: 'avoid',
    bracketSameLine: true,
    bracketSpacing: false,
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    printWidth: 300,
    endOfLine: 'atuo',
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            options: {
                tabWidth: 4,
            },
        },
    ],
};
