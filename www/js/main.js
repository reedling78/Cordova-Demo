/*jslint nomen: true*/
/*globals window, document, define, $, _, localStorage, console, Backbone, alert*/

require.config({
    deps: ['main'],
    paths: {
        'backbone': '../bower_components/backbone/backbone-min',
        'bootstrap': '../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        'handlebars': '../bower_components/handlebars/handlebars.amd.min',
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery']
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'handlebars': {
            exports: 'handlebars'
        }
    }
});

define(['bootstrap', 'backbone'], function () {
    'use strict';
    var App = {};
    require(['router']);
});