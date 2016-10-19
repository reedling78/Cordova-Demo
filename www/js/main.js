/*jslint nomen: true*/
/*globals window, document, define, $, _, localStorage, dataLayer, console, Modernizr, Fonts, alert*/

require.config({
    deps: ['main'],
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'bootstrap': '../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min'
    },
    shim: { 'bootstrap': { deps: ['jquery'] } }
});

define(['bootstrap'], function () {
    'use strict';
    console.log('whatever');
});