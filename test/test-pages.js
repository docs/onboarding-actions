var expect  = require('chai').expect;
var fetch = require('node-fetch');
var app = require('../app.js');

it('Page content test', async () => {
  let response = await fetch('http://127.0.0.1:3000'); // 127.0.0.1 because of https://github.com/node-fetch/node-fetch/issues/1624
  let body = await response.text();
  // console.log(response.status);
  // console.log(body);
  expect(response.status).to.equal(200);
  expect(body).to.match(/Hello world, everything is awesome/);
})
