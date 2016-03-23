require('./spec_helper');

describeWithWebdriver('Features', () => {

    let page;

    describe('when visiting google.com', () => {
        beforeEach(async (done) => {
            page = (await visit('https://google.com')).page;
            done();
        });

        it('page contains the search input', async done => {
            await waitForExist(page, '.gsfi')
            done();
        });
    });

});