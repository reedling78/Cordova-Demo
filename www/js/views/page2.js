/*jslint nomen: true*/
/*globals window, document, define, $, _, console, alert, Backbone*/

define(['hbs!templates/page2'], function (template) {
    'use strict';
    var view = Backbone.View.extend({
        el: $('[data-context="main-content"]'),

        initialize: function () {
            this.render();
        },

        events : {
            'click button': 'something'
        },

        something: function () {
            console.log('something');
        },
        render: function () {
            this.$el.html(template({}));
        }

    });

    return view;
});