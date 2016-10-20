/*jslint nomen: true*/
/*globals window, document, define, $, _, console, alert, Backbone*/

define([], function () {
    'use strict';
    var view = Backbone.View.extend({
        el: $('[data-context="main-content"]'),

        initialize: function () {
            console.log('Page 2 View Initialized');

        },

        events : {
            'click button': 'something'
        },

        something: function () {
            //alert('something');
        }

    });

    new view();
});





