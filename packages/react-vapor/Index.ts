import {extend} from 'underscore';

const req = require.context('./src/', true, /^((?!\.spec|examples|Tests?|\.d).)*\.tsx?$/i);
req.keys().forEach((key) => {
    const importedModule = req(key);
    extend(module.exports, importedModule);
});
