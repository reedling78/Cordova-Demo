/*jslint nomen: true*/
/*globals window, document, define, $, _, console, alert, Backbone*/

define(['handlebars'], function (Handlebars) {
    'use strict';
    var view = Backbone.View.extend({
        el: $('[data-context="main-content"]'),

        initialize: function () {
            console.log('Page 1 View Initialized');
            // console.log(handlebars);
            console.log(Handlebars);
            console.log(this.el);
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





