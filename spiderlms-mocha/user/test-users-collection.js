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

    it('Test1: List all Users - GET request', function(done){
        TheAPI
            .get('/users')
            .send({})
            .expect(200)
            .end(function(err, res){
                //log.info('Test1 Response: '+JSON.stringify(res));
                log.info('Test1: Response code: '+res.statusCode);
                assert.equal(res.statusCode, 200);


                var firstArrayElement = res.body[0];
                
                console.log("BODY: " + JSON.stringify(res, null, 4)); // Empty
                //var secondArrayElement = res.body[1];
                //var thirdArrayElement = res.body[2];

                //assert.equal(firstArrayElement.id, 1);
                //assert.equal(firstArrayElement.name, "Daniel Cohen");

                // //TODO: Verify each user
                // assert.equal(res, "id: " + res.id + ",\n" +
                //     "name: " + res.name + ",\n" + 
                //     "email: " + res.email + ",\n" +
                //     "role: " + res.role + ",\n" +
                //     "manager_id: " + res.manager_id + ",\n" +
                //     "last_login: " + res.last_login + ",\n");

                done();
            });

    })

    it('Test2: Create a User - POST request', function(done){
        TheAPI
            .put('/users')
            .send({
                "name": "Sarah Conner",
                "email": "sconner@mobiquityinc.com",
                "role": "user",
                "manager_id": 1
            })
            .expect(201)
            .end(function(err, res){
                log.info('Test2 Response: '+JSON.stringify(res.body)); //empty
                log.info('Test2: Response code: '+res.statusCode);
                assert.equal(res.statusCode, 201);
                // assert.equal(res.body.id, 2);
                // assert.equal(res.body.description, 'This is a description for the Spidey callbacks video.  yay.');
                // assert.equal(res.body.url, 'https://SpiderLMS.s3.amazonaws.com/23234234LSKDJFSDF');
                // assert.equal(res.body.tags, 'tag1, tag2, tag3, tag4');
                // assert.equal(res.body.created_at, '2014-03-17 10:10:10');
                // assert.equal(res.body.updated_at, '2014-03-17 10:10:10');
                // done();
            });
    })
})


