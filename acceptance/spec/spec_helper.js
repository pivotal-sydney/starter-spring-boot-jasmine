const {Factory} = require('rosie');

let globals;

beforeAll(() => {
    globals = {Factory};
    Object.assign(global, globals);
});

afterAll(() => {
    Object.keys(globals).forEach(key => delete global[key]);
    delete require.cache[require.resolve(__filename)];
});