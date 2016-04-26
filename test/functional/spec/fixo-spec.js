/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var util = require('../util');

describe('@generic@', function () {
    before(function (done) {
        nemo = Nemo(function (err) {
            <<<<<<< c209efe7d01d3ebd51b35c1eb10b7fb66db1eee3
            if (err) {
                return done(err);
            }
            =======
                //nemo.wd.logging.installConsoleHandler();
                //nemo.wd.logging.getLogger().setLevel(nemo.wd.logging.Level.ERROR);
                nemo.driver.controlFlow().on('uncaughtException', function (err) {
                    console.error('err', err);
                    throw err;
                });
            >>>>>>> wdb stuff
            done();
        });
    });
    after(function (done) {
        nemo.driver.quit().then(done);
    });
    it('should execute high level functionality using generic methods', function (done) {
        //login
        nemo.driver.get(nemo.data.baseUrl);
        util.waitForJSReady(nemo);
        nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
        nemo.view._find('#password').sendKeys('11111111');
        nemo.view._find('#loginbutton').click();
        //add card
        nemo.view._waitVisible('#cc').sendKeys('123456789012');
        nemo.view._finds('#type option').then(function(opts) {
            return opts[1].click();
        });
        nemo.view._find('#ccbutton').click();
        nemo.view._waitVisible('p.result.good');
        //add bank
        nemo.view._find('#addbalink').click();
        nemo.view._waitVisible('#ban').sendKeys('0123545332');
        nemo.view._find('#brn').sendKeys('343434');
        nemo.view._find('#babutton').click();
        nemo.view._waitVisible('p.result.good');
        //logout
        nemo.view._find('#logoutlink').click();
        util.waitForJSReady(nemo);

        nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
        nemo.view._find('#password').sendKeys('11111111');
        nemo.view._find('#loginbutton').click();
        //add card
        nemo.view._waitVisible('#cc').sendKeys('123456789012');
        nemo.view._finds('#type option').then(function(opts) {
            return opts[1].click();
        });
        nemo.view._find('#ccbutton').click();
        nemo.view._waitVisible('p.result.good');
        //add bank
        nemo.view._find('#addbalink').click();
        nemo.view._waitVisible('#ban').sendKeys('0123545332');
        nemo.view._find('#brn').sendKeys('343434');
        nemo.view._find('#babutton').click();
        nemo.view._waitVisible('p.result.good');
        //logout
        nemo.view._find('#logoutlink').click();
        util.waitForJSReady(nemo);

        nemo.view._waitVisible('id:email').sendKeys('me@mine.com');
        nemo.view._find('#password').sendKeys('11111111');
        nemo.view._find('#loginbutton').click();
        //add card
        nemo.view._waitVisible('#cc').sendKeys('123456789012');
        nemo.view._finds('#type option').then(function(opts) {
            return opts[1].click();
        });
        nemo.view._find('#ccbutton').click();
        nemo.view._waitVisible('p.result.good');
        //add bank
        nemo.view._find('#addbalink').click();
        nemo.view._waitVisible('#ban').sendKeys('0123545332');
        nemo.view._find('#brn').sendKeys('343434');
        nemo.view._find('#babutton').click();
        nemo.view._waitVisible('p.result.good');
        //logout
        nemo.view._find('#logoutlink').click();
        nemo.view._waitVisible('#email').then(function () {
            done();
        }, function (err) {
            done(err);
        })
    });
});