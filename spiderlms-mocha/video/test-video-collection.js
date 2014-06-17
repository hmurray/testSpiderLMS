var bootstrap = require('../bootstrap');
var assert = require('assert');
var log = bootstrap.log;
var TheAPI;

describe('Test User', function() {
    before(function(done){
        log.info('>>>>> Test Setup')
        TheAPI = bootstrap.request(bootstrap.testURL);
        done();
    })

    after(function(done){
        done();
    })

	it('Test1: Get all of the videos - GET request', function(done) {
		TheAPI
			.get('/users')
            .send()
            .expect(200)
            .end(function(err, res){
                // if(err) {
                //     log.error('Error: ' +err);
                // }
                // else {
                    log.info('Test1 Response: '+JSON.stringify(res.body, null, 4)); // empty
                    log.info('Test1: Response code: '+res.statusCode);
                    assert.equal(res.statusCode, 200);
                    // assert.equal(res.body.id, 2);
                    // assert.equal(res.body.description, 'This is a description for the Spidey callbacks video.  yay.');
                    // assert.equal(res.body.url, 'https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF');
                    // assert.equal(res.body.tags, 'tag1, tag2, tag3, tag4');
                    // assert.equal(res.body.created_at, '2014-03-17 10:10:10');
                    // assert.equal(res.body.updated_at, '2014-03-17 10:10:10');
                    //assert.equal(res.body.assets[0].id)
                //}

                done();
            });
	})

    it('Test2: Put a video - PUT request', function(done) {
        TheAPI
            .put('/videos')
            .send({ 
                  "Awesome Spier Video": "Look at these spiders!!!",
                  "description": "These are the coolest spiders I have ever seen in my life",
                  "url": "https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF",
                  "uploaded_by": 4,
                  "tags" : "spiders, cool, awesome, educational"
                })
            .expect(201)
            .end(function(err, res){
                if(err) {
                    log.error('Error: ' +err);
                }
                else{
                    log.info('Test2 Response: '+JSON.stringify(res.body, null, 4)); // filled
                    log.info('Test2: Response code: '+res.statusCode);
                    assert.equal(res.statusCode, 201);
                    assert.equal(res.body.id, 2);
                    assert.equal(res.body.description, 'This is a description for the Spidey callbacks video.  yay.');
                    assert.equal(res.body.url, 'https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF');
                    assert.equal(res.body.tags, 'tag1, tag2, tag3, tag4');
                    assert.equal(res.body.created_at, '2014-03-17 10:10:10');
                    assert.equal(res.body.updated_at, '2014-03-17 10:10:10');

                }
                
                done();
            });
    })
})