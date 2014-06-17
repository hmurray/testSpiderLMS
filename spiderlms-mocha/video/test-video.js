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

    it('Test1: Retrieve a Video - PATCH request', function(done){
        TheAPI
            .patch('/videos/2')
            .send({ 
              "id": 2,
              "title": "Updating the video title!",
              "description": "This is a description for the Spidey callbacks video.  yay.",
              "url": "https://SpiderLMS.s3.amazonaws.com/12345",
              "tags" : "tag1, tag2, tag3, tag4, tags5"
            })
            .expect(201)
            .end(function(err, res){
                log.info('Test1 (PATCH) Response: '+JSON.stringify(res.body, null, 4)); // empty
                log.info('Test1: Response code: '+res.statusCode);
                

                done();
            });
    });


    it('Test2: Retrieve a Video - GET request', function(done){
        TheAPI
            .get('/videos/2')
            .send()
            .expect(200)
            .end(function(err, res){
                log.info('Test1 (GET) Response: '+JSON.stringify(res.body, null, 4)); // filled
                log.info('Test1: Response code: '+res.statusCode);

                assert.equal(res.statusCode, 200);
                assert.equal(res.body.id, 2);
                assert.equal(res.body.description, 'This is a description for the Spidey callbacks video.  yay.');
                assert.equal(res.body.url, 'https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF');
                assert.equal(res.body.tags, 'tag1, tag2, tag3, tag4');
                assert.equal(res.body.created_at, '2014-03-17 10:10:10');
                assert.equal(res.body.updated_at, '2014-03-17 10:10:10');
                assert.equal(res.body.assets[0].id, 1);
                assert.equal(res.body.assets[0].title, "The slide show");
                assert.equal(res.body.assets[0].filetype, "pptx");
                assert.equal(res.body.assets[0].fileurl, 'http://this.is.an.amazon.s3.url');
                assert.equal(res.body.assets[1].id, 2);
                assert.equal(res.body.assets[1].title, "The notes");
                assert.equal(res.body.assets[1].filetype, "pdf");
                assert.equal(res.body.assets[1].fileurl, 'http://this.is.an.amazon.s3.url');

                done();
            });
    });


    it('Test3: Retrieve a Video - DELETE request', function(done){
        TheAPI
            .del('/videos/2')
            .send()
            .expect(204)
            .end(function(err, res){
                log.info('Test1 (DELETE) Response: '+JSON.stringify(res.body, null, 4)); // empty
                log.info('Test1: Response code: '+res.statusCode);


                done();
            });
    });
});
