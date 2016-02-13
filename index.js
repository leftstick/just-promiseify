/**
 *
 *  @author Howard.Zuo
 *  @date Feb 13, 2016
 *
 **/
(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function() {
            return (root.Promiseify = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.Promiseify = factory();
    }
}(this, function() {
    'use strict';
    var slice = Array.prototype.slice;
    var Promiseify;

    if (typeof Promise === 'undefined') {
        throw new Error('There is no Promise defined in your enviroment, use proper enviroment or inject it manually');
    }

    Promiseify = function(func) {

        return function() {
            var ctx = this;
            var parameters = slice.apply(arguments);

            return new Promise(function(resolve, reject) {
                var cb = function(err) {
                    var callbackData = slice.apply(arguments);
                    if (callbackData.length === 1 && !(err instanceof Error)) {
                        return resolve.call(this, err);
                    }

                    if (err) {
                        return reject(err);
                    }

                    if (callbackData.length === 2) {
                        return resolve.call(this, callbackData[1]);
                    }
                    return resolve.call(this, callbackData.slice(1));
                };
                func.apply(ctx, parameters.concat([cb]));
            });
        };

    };

    return Promiseify;
}));
