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

    it('Test1: Create an Asset - POST request', function(done){
        TheAPI
            .post('/assets')
            .send({ 
				  "title": "Laura's cool pdf",
				  "description": "coolest pdf of allllll time",
				  "type": "pdf",
				  "url": "https://SpiderLMS.s3.amazonaws.com/12345",
				  "uploaded_by" : "2"
				} )
            .expect(201)
            .end(function(err, res){
                log.info('Test2: Response: '+JSON.stringify(res.body, null, 4));
                log.info('Test2: Response code: '+res.statusCode);
                assert.equal(res.statusCode, 201);

                assert.equal(res.body.id, 1);
			    assert.equal(res.body.title, "Laura's cool pdf");
			    assert.equal(res.body.description, "coolest pdf of allllll time");
			    assert.equal(res.body.type, "pdf");
			    assert.equal(res.body.url, "https://SpiderLMS.s3.amazonaws.com/12345");
			    assert.equal(res.body.uploaded_by, 2);

                done();
            });

    });

    it('Test2: Get All Assets - GET request', function(done){
        TheAPI
            .get('/assets')
            .send()
            .expect(200)
            .end(function(err, res){
                log.info('Test1 Response: '+JSON.stringify(res.body, null, 4)); // not empty but res.body.id is still undefined
                log.info('Test1: Response code: '+res.statusCode);

                assert.equal(res.statusCode, 200);

                //assert.equal(res.body.id, 1);
			    // assert.equal(res.body.title, "Laura's cool pdf");
			    // assert.equal(res.body.description, "coolest pdf of allllll time");
			    // assert.equal(res.body.type, "pdf");
			    // assert.equal(res.body.url, "https://SpiderLMS.s3.amazonaws.com/12345");
			    // assert.equal(res.body.uploaded_by, 2);

                done();
            });
    });
});