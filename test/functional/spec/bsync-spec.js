/*global nemo:true, describe:true, it:true */
const util = require('../util');

describe('@bsync@ uses ES6 async/await', function () {
    it('should kill the driver', async function () {
        //google search
        let nemo = this.nemo;

        await nemo.driver.get('http://www.google.com');
        await nemo.view._waitVisible('[name=qz]');
        await nemo.view._find('[name=q]').sendKeys('webdriver');
        await nemo.vie._find('[name=btnG]').click();
        throw new Error('bam')
        return nemo.driver.wait(nemo.wd.until.titleIs('webdriver - Google Search'), 1000);
    });
    it('should use async/await control flow', async function () {
        //google search
        let nemo = this.nemo;
        await nemo.driver.get('http://www.google.com');
        await nemo.view._waitVisible('[name=q]');
        await nemo.view._find('[name=q]').sendKeys('webdriver');
        await nemo.view._find('[name=btnG]').click();
        return nemo.driver.wait(nemo.wd.until.titleIs('webdriver - Google Search'), 1000);
    });
});
