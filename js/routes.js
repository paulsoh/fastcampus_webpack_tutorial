/*global app, Router */
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './insertImageToHtml';

var app = require('./app');
import {
  sayHelloTo,
} from './es6Code';

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


sayHelloTo('Fast campus');
