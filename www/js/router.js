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

        function render(view) {
            require(['views/' + view], function (View) {
                if (window.app.views[view] !== undefined) {
                    //window.app.views[view].remove();
                    window.app.views[view].render();
                } else {
                    window.app.views[view] = new View();
                }
            });
        }

        switch (action) {
        case 'page1':
            render('page1');
            break;
        case 'page2':
            render('page2');
            break;
        case 'page3':
            render('page3');
            break;
        default:
            render('page1');
        }
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
});