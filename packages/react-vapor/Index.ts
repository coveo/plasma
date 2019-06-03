const req = require.context('./src/', true, /^((?!\.spec|examples|Tests?|\.d).)*\.tsx?$/i);
req.keys().forEach((key) => {
    const importedModule = req(key);
    _.extend(module.exports, importedModule);
});
