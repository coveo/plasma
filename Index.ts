const req = require.context('./src/', true, /^((?!\.spec|examples?).)*\.tsx?$/i);
req.keys().forEach((key) => {
  const importedModule = req(key);
  _.extend(module.exports, importedModule);
});
