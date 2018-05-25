const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

describe('Server',()=>{
    describe('Get /',()=>{
        it('should return a Greetings from the homepage message', (done)=>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        error: "Page not found"
                    })
                })
                .end(done)
        });
    })
    describe('Get /users',()=>{
        it('should return my users object',(done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:"me",
                        age:39
                    })
                })
                .end(done)
        })
    })
})


