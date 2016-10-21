/*jslint nomen: true*/
/*globals window, document, define, $, _, console, alert, Backbone*/

define(['hbs!templates/page2', 'models/widget'], function (template, Widget) {
    'use strict';
    var view = Backbone.View.extend({
        el: $('[data-context="main-content"]'),

        initialize: function () {
            
            this.render();
        },

        events : {
            'click [type="submit"]': 'something'
        },

        something: function () {
            this.$el.off('click', '[type="submit"]');
            console.log('something');
        },
        render: function () {
            this.$el.html(template({}));
        }

    });

    return view;
});