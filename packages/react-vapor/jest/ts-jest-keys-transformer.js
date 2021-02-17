// https://github.com/kimamula/ts-transformer-keys#readme
// In order to use this transformer with ts-jest, you need to add a wrapper around it like this:

const keysTransformer = require('ts-transformer-keys/transformer').default;
const name = 'my-key-transformer';
const version = 1;
const factory = (cs) => (ctx) => keysTransformer(cs.tsCompiler.program)(ctx);

module.exports = {name, version, factory};
