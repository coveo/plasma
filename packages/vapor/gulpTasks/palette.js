const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const _ = require('underscore');

gulp.task('palette', 'Generates the palette map with all the color variables', (done) => {
    const paletteMap = fs.readFileSync('./scss/common/palette.scss', 'utf8')
        .match(/\$.+(?=:)/g)
        .reduce(
            (partialPalette, sassVariable) => `${partialPalette}    ${sassVariable.slice(1)}: ${sassVariable},\n`,
            '$palette: (\n'
        )
        .concat(');\n');

    fs.writeFile('./scss/common/palette-map.scss', paletteMap, done);
});
