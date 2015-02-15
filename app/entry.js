// vendors
require('angular');
require('angular-route');

// sections
require('./hello/hello.js');

angular
    .module('App', ['ngRoute', 'Hello']);