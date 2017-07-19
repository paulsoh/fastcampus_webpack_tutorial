/*global app, Router */

var app = require('./app');

var router = new Router();

['all', 'active', 'completed'].forEach(function (visibility) {
  router.on(visibility, function () {
    app.visibility = visibility;
  });
});

router.configure({
  notfound: function () {
    window.location.hash = '';
    app.visibility = 'all';
  }
});

router.init();
console.log("Router Intitiated!!!!");
