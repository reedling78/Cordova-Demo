/*jslint nomen: true*/
/*globals window, document, define, $, _, localStorage, console, Backbone, alert*/

require.config({
    deps: ['main'],
    baseUrl: 'js',
    paths: {
        'backbone': '../bower_components/backbone/backbone-min',
        'bootstrap': '../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'handlebars': '../bower_components/handlebars/handlebars.min',
        'hbs': '../bower_components/require-handlebars-plugin/hbs'
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
        }
    }
});

define(['bootstrap', 'backbone'], function () {
    'use strict';
    window.app = {};
    require(['router']);
});