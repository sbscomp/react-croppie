"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deepExtend = exports.deepExtend = function deepExtend(destination, source) {
    destination = destination || {};
    for (var property in source) {
        if (!source.hasOwnProperty(property)) continue;
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            if (destination[property] && destination[property].constructor && destination[property].constructor === Object) deepExtend(destination[property], source[property]);else {
                destination[property] = {};
                deepExtend(destination[property], source[property]);
            }
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};

var cssExtend = exports.cssExtend = function cssExtend(source, old) {
    for (var key in old) {
        if (!old.hasOwnProperty(key)) continue;
        if (!source[key]) source[key] = old[key];
    }
    return source;
};