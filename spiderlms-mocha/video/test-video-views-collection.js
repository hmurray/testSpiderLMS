var bootstrap = require('../bootstrap');
var assert = require('assert');
var log = bootstrap.log;
var TheAPI;

describe('Test User', function(){
    before(function(done){
        log.info('>>>>> Test Setup')
        TheAPI = bootstrap.request(bootstrap.testURL);
        done();
    })

    after(function(done){
        done();
    })

    it('Test1: Retrieve a Video View - GET request', function(done){
        TheAPI
            .get('/videosviews/2')
            .send()
            .expect(200)
            .end(function(err, res){
                log.info('Test1 Response: '+JSON.stringify(res.body, null, 4)); // empty
                log.info('Test1: Response code: '+res.statusCode);

                assert.equal(res.statusCode, 200);
                 assert.equal(res.body.id, 1);
                // assert.equal(res.body.user_id, 1);
                // assert.equal(res.body.time_watched, '2014-03-15 11:11:11');
                // assert.equal(res.body.video_id, 1);
                // assert.notEqual(res.body.ending_frame, '');

                done();
            });
    });

});