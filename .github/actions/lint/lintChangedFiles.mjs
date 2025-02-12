/* eslint-disable prefer-arrow/prefer-arrow-functions */
import {ESLint} from 'eslint';

const changedFiles = process.argv.slice(2);
const changedFilesWithoutDuplicates = [...new Set(changedFiles)];

const ALLOWED_EXTENSIONS = ['js', 'ts', 'jsx', 'tsx', 'jsxt'];

(async function main() {
    const eslint = new ESLint();

    console.log('\x1b[32mList of changed files', changedFilesWithoutDuplicates);

    // remove all files that are not an allowed extension from the array
    const filteredArray = changedFilesWithoutDuplicates.filter((element) => {
        const extension = element.split('.').pop();
        return ALLOWED_EXTENSIONS.includes(extension);
    });

    console.log('\x1b[32mFiltered list of files that will be linted', filteredArray);

    const results = await eslint.lintFiles(filteredArray);

    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    console.log('\x1b[32mLint results:', resultText || '\x1b[32mNo error or warning were found');

    // Force exit 1 if error are found to make GitHub runner fail the step
    results.some((result) => {
        if (result.errorCount > 0) {
            process.exit(1);
        }
    });
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});
