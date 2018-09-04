import { expect } from 'chai';
import {} from 'jasmine';
import * as supertest from 'supertest';

// This agent refers to PORT where the program is running.
const serverAdress = 'http://localhost:10010';
console.log('serverAdress : ' + serverAdress);
const server = supertest.agent(serverAdress);

// UNIT test begin

describe('SAMPLE unit test', () => {

  // #1 should return home page
  it('should return home page', (done: any) => {
    // calling home page
    server
    .get('/')
    .expect('Content-type', /json/)
    .expect(200) // THis is HTTP response
    .end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });

});
