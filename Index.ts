const req = require.context('./src/', true, /^((?!\.spec|examples|Test|\.d).)*\.tsx?$/i);
req.keys().forEach((key) => {
    const importedModule = req(key);
    _.extend(module.exports, importedModule);
});
