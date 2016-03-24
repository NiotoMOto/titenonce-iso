'use strict';

const koa = require('koa');
const router = require('koa-router')();

const main = koa();

router.get('/', function* () {
  this.body = yield this.render('Home', {
    props: { cheers: 'toto' },
  });
}).get('/service/:id', function* () {
  this.body = yield this.render('Service', {
    props: { serviceId: this.params.id},
    scripts: ['https://maps.googleapis.com/maps/api/js']
  });
});

main.use(router.routes())
  .use(router.allowedMethods());

module.exports = main;
