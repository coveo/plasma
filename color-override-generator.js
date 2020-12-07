function printOverrideCss() {
    return (['mirage', 'science-blue', 'dodger-blue', 'tropical-rain-forest', 'observatory', 'caribbean-green', 'lynch', 'bali-hai', 'nepal', 'heather', 'tango', 'neon-carrot', 'tan-hide', 'oxford-blue', 'coveo-grey', 'astral', 'matisse', 'curious-blue-1', 'curious-blue-2',
        'coveo-blue', 'blue-purple-1', 'blue-purple-2', 'blue-purple-3', 'blue-purple-4', 'blue-purple-5', 'frosted-mint', 'frosted-mint-1', 'persian-green', 'watercourse', 'cyprus', 'deep-teal', 'orange-1', 'orange-2', 'orange-3', 'orange-4', 'orange-5', 'orange-6', 'orange-7', 'orange-8',
        'coveo-orage', 'carrot-orange', 'tahiti-gold', 'buttercup', 'my-sin', 'amber', 'sunglow' ,'school-bus-yellow', 'picasso', 'lemon-chiffon', 'travertine', 'lonestar-1', 'lonestar-2', 'red-berry' , 'sangria', 'milano-red', 'pomegranate', 'persimmon', 'bittersweet', 'mona-lisa',
        'melon', 'azure', 'anakiwa', 'java', 'grey-1','grey-2','grey-3','grey-4','grey-5','grey-6', 'grey-7', 'grey-8' , 'grey-9', 'grey-10', 'blue-1', 'blue-2', 'blue-3', 'blue-4', 'blue-5', 'blue-6', 'blue-7', 'blue-8', 'blue-9', 'blue-10', 'red', 'yellow', 'green', 'darker-blue', 'dark-blue', 'medium-blue', 'light-blue', 'dark-grey', 'dark-meidum-grey', 'medium-grey', 'light-grey', 'white', 'pure-white', 'orange', 'stratos', 'purple-blue', 'soft-red', 'soft-green', 'blue', 'black' , 'turquoise'].map(function(name) {
        return `// ${name}
.bg-${name} {background-color: var(--${name});}
.fill-${name} {fill: var(--${name});}
.text-${name} {color: var(--${name});}
.border-${name} {border-color: var(--${name})}
.border-color-${name} {border-color: var(--${name});}
.border-left-color-${name} {border-left-color:var(--${name});}
.border-right-color-${name} {border-left-color: var(--${name});}
.border-top-color-${name} {border-left-color: var(--${name});}
.border-bottom-color-${name} {border-left-color: var(--${name});}
.hover-color-${name}:hover {background-color: var(--${name});}
.tooltip.mod-bg-${name} {
    .tooltip-inner {background-color: var(--${name});}
    &.left .tooltip-arrow {border-left-color: var(--${name});}
    &.bottom .tooltip-arrow {border-bottom-color: var(--${name});}
    &.top .tooltip-arrow {border-top-color: var(--${name});}
    &.right .tooltip-arrow {border-right-color: var(--${name});}
}

`}).join(''));
}
const result = printOverrideCss();

const fs = require('fs');

let path = 'result.txt';
let buffer = new Buffer(result.toString());

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'could not open file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
    });
});