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

    it('Test1: List all Activity For a User - GET request', function(done){
        TheAPI
            .get('/users/1/activities')
            .send()
            .expect(200)
            .end(function(err, res){
                log.info('Test1 Response: '+JSON.stringify(res.body, null, 4)); // empty
                log.info('Test1: Response code: '+res.statusCode);

                assert.equal(res.statusCode, 200);
                // assert.equals(res.body.activity_title, 'Video Watching');
                // assert.equals(res.body.user_id, 'Video Watching');
                // assert.equals(res.body.tesxt, '2014-03-15 11:11:11');
                // assert.equals(res.body.video_id, 1);
                // assert.equals(res.body.ending_frame, '');

                done();
            });
    });
    
});