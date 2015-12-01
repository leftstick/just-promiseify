var promiseify = require('../');
var expect = require('chai').expect;
var path = require('path');
var fs = require('fs');

describe('basic test', function() {

    var txt = path.resolve(__dirname, 'resource', 'hello.txt');
    var img = path.resolve(__dirname, 'resource', 'logo.png');


    it('readFile from txt', function(done) {
        var readFile = promiseify(fs.readFile);
        readFile(txt, 'utf8')
            .then(function(data) {
                expect(data).to.be.equal('hello\n');
                done();
            })
            .catch(done);
    });

    it('stat from image', function(done) {
        var stat = promiseify(fs.stat);
        stat(img)
            .then(function(stats) {
                expect(stats.isFile()).be.be.true;
                expect(stats.isDirectory()).to.be.false;
                done();
            })
            .catch(done);
    });

    it('readFile from non-exist path', function(done) {
        var readFile = promiseify(fs.readFile);
        readFile('non-exist', 'utf8')
            .catch(function(err) {
                expect(err).to.be.an.instanceof(Error);
                done();
            })
            .catch(done);
    });

    it('read resouce from github', function(done) {
        var request = require('request');
        var req = promiseify(request);
        req({
            url: 'https://api.github.com/search/users?q=leftstick',
            headers: {
                'User-Agent': 'test',
                'Content-type': 'application/json'
            },
            json: true
        })
            .then(function(data) {
                expect(data[1].total_count).to.be.equal(1);
                done();
            })
            .catch(done);
    });

});
