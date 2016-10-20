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

    app_router.on('route:defaultRoute', function (actions) {
        require(['views/' + actions]);
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
});
