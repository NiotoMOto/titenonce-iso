'use strict';

const koa = require('koa');
const router = require('koa-router')();

const main = koa();

router.get('/', function* () {
  this.body = yield this.render('Home', {
    props: { cheers: 'toto' },
  });
});

router.get('/services', function* () {
  this.body = yield this.render('Services', {
    props: { serviceId: this.params.id },
    scripts: ['https://maps.googleapis.com/maps/api/js'],
  });
});

router.get('/services/:id', function* () {
  this.body = yield this.render('Service', {
    props: { serviceId: this.params.id },
    scripts: ['https://maps.googleapis.com/maps/api/js'],
  });
});

main.use(router.routes())
  .use(router.allowedMethods());

module.exports = main;
