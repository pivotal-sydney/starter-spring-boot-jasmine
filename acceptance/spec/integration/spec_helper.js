require('../support/bluebird');
require('../spec_helper');
const webdriverHelper = require('./helpers/webdriver_helper');

const {DEFAULT_TIMEOUT_INTERVAL} = jasmine;

const globals = {...webdriverHelper};
Object.assign(global, globals);

beforeEach(() => {
    Promise.onPossiblyUnhandledRejection(e => expect(() => {throw e;}).not.toThrow());
});

beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
});

afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = DEFAULT_TIMEOUT_INTERVAL;
    Object.keys(globals).forEach(key => delete global[key]);
});