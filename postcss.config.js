const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                'last 3 Chrome versions',
                'last 3 Firefox versions',
                'Explorer >= 11',
                'last 2 Edge versions',
                'last 3 Opera versions',
                'Safari >= 8',
            ],
        }),
    ],
};
