'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleStuff = require("./styleStuff");

var _styleStuff2 = _interopRequireDefault(_styleStuff);


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

var TransformOrigin = exports.TransformOrigin = function TransformOrigin(el) {
    if (!el || !el.style[_styleStuff2.CSS_TRANS_ORG]) {
        this.x = 0;
        this.y = 0;
        return;
    }
    var css = el.style[_styleStuff2.CSS_TRANS_ORG].split(' ');
    this.x = parseFloat(css[0]);
    this.y = parseFloat(css[1]);
};

TransformOrigin.prototype.toString = function () {
    return this.x + 'px ' + this.y + 'px';
};
