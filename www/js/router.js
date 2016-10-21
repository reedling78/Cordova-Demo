/*jslint nomen: true*/
/*globals window, document, define, $, _, console, alert, Backbone*/

define([], function () {
    'use strict';
    var AppRouter = Backbone.Router.extend({
            routes: {
                "*actions": "defaultRoute"
                // matches http://example.com/#anything-here
            }
        }),
        app_router = new AppRouter();

    app_router.on('route:defaultRoute', function (action) {
        var currentview = {};

        switch (action) {
        case 'page1':
            require(['views/page1'], function (View) {
                currentview = new View();
            });
            break;
        case 'page2':
            require(['views/page2'], function (View) {
                currentview = new View();
            });
            break;
        case 'page3':
            require(['views/page3'], function (View) {
                currentview = new View();
            });
            break;
        default:
            require(['views/page1'], function (View) {
                currentview = new View();
            });
        }
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
});