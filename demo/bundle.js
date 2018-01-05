/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"es2015\" relative to directory \"/usr/local/lib/node_modules/webpack/node_modules/process\"\n    at /Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\n    at OptionManager.mergePresets (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\n    at OptionManager.mergeOptions (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\n    at OptionManager.init (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-loader/lib/index.js:46:20)\n    at Object.module.exports (/Users/buccim2/Development/Genentech/helix-cup/node_modules/react-croppie/node_modules/babel-loader/lib/index.js:163:20)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StyleRelated = {
	cssPrefixes: ['Webkit', 'Moz', 'ms'],
	emptyStyles: document.createElement('div').style,
	CSS_TRANS_ORG: null,
	CSS_TRANSFORM: null,
	CSS_USERSELECT: null,
	vendorPrefix: function vendorPrefix(prop) {
		if (prop in this.emptyStyles) {
			return prop;
		}

		var capProp = prop[0].toUpperCase() + prop.slice(1),
		    i = this.cssPrefixes.length;

		while (i--) {
			prop = this.cssPrefixes[i] + capProp;
			if (prop in this.emptyStyles) {
				return prop;
			}
		}
	}
};

module.exports = StyleRelated;

StyleRelated.CSS_TRANSFORM = StyleRelated.vendorPrefix('transform');
StyleRelated.CSS_TRANS_ORG = StyleRelated.vendorPrefix('transformOrigin');
StyleRelated.CSS_USERSELECT = StyleRelated.vendorPrefix('userSelect');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

var Thing = __webpack_require__(7);

var div = document.createElement("div");

document.body.appendChild(div);

ReactDOM.render(_jsx(Thing, {}), div);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
var Croppie = __webpack_require__(8);

var _ref = _jsx("p", {}, void 0, "result image width and height(input zero for default size):");

var _ref2 = _jsx("br", {});

var _ref3 = _jsx("br", {});

var _ref4 = _jsx("div", {}, void 0, "result:");

var Thing = React.createClass({
	displayName: "Thing",
	getInitialState: function getInitialState() {
		return {
			url: "image.jpg",
			zoomer: true
		};
	},
	render: function render() {
		return _jsx("div", {}, void 0, React.createElement(Croppie, { url: this.state.url, showZoomer: this.state.zoomer, ref: "croppie" }), _jsx("div", {
			style: { textAlign: "center" }
		}, void 0, _jsx("div", {}, void 0, _ref, _jsx("div", {}, void 0, "width(px): ", React.createElement("input", { className: "input", type: "number", defaultValue: 0, ref: "width" }), _ref2), _jsx("div", {}, void 0, "height(px): ", React.createElement("input", { className: "input", type: "number", defaultValue: 0, ref: "height" }), _ref3), _jsx("span", {
			onClick: this.toggleZoomer,
			className: "button"
		}, void 0, "show/hide zoomer")), _jsx("span", {
			onClick: this.getResult.bind(this, "html"),
			className: "button"
		}, void 0, "html result"), _jsx("span", {
			onClick: this.getResult.bind(this, "base64"),
			className: "button"
		}, void 0, "base64 result"), _jsx("div", {
			style: { height: "20px" }
		}), _jsx("div", {}, void 0, _ref4, this.resultView())));
	},
	getResult: function getResult(type) {
		var _this = this;

		var width = parseInt(this.refs.width.value),
		    height = parseInt(this.refs.height.value);
		var size = { width: width, height: height };
		if (width === 0 || height === 0) size = 'original';
		this.refs.croppie.result({ size: size, type: type, circle: false }).then(function (res) {
			_this.setState({
				result: res,
				resultType: type
			});
		});
	},
	resultView: function resultView() {
		switch (this.state.resultType) {
			case "html":
				return this.state.result;
			case "base64":
				return _jsx("img", {
					src: this.state.result,
					alt: ""
				});
		}
	},
	toggleZoomer: function toggleZoomer() {
		this.setState({
			zoomer: !this.state.zoomer
		});
	}
});

module.exports = Thing;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _jsx = function () {
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;return function createRawReactElement(type, props, key, children) {
		var defaultProps = type && type.defaultProps;var childrenLength = arguments.length - 3;if (!props && childrenLength !== 0) {
			props = {};
		}if (props && defaultProps) {
			for (var propName in defaultProps) {
				if (props[propName] === void 0) {
					props[propName] = defaultProps[propName];
				}
			}
		} else if (!props) {
			props = defaultProps || {};
		}if (childrenLength === 1) {
			props.children = children;
		} else if (childrenLength > 1) {
			var childArray = Array(childrenLength);for (var i = 0; i < childrenLength; i++) {
				childArray[i] = arguments[i + 3];
			}props.children = childArray;
		}return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null };
	};
}();

var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));
var PropTypes = __webpack_require__(14);

var Transform = __webpack_require__(9);
var StyleRelated = __webpack_require__(4);

///////////
var TransformOrigin = function TransformOrigin(el) {
	if (!el || !el.style[StyleRelated.CSS_TRANS_ORG]) {
		this.x = 0;
		this.y = 0;
		return;
	}
	var css = el.style[StyleRelated.CSS_TRANS_ORG].split(' ');
	this.x = parseFloat(css[0]);
	this.y = parseFloat(css[1]);
};

TransformOrigin.prototype.toString = function () {
	return this.x + 'px ' + this.y + 'px';
};
//////////


var Croppie = React.createClass({
	displayName: "Croppie",

	//////////
	isDragging: false,
	originalX: null,
	originalY: null,
	originalDistance: null,
	vpRect: null,
	transform: null,
	_currentZoom: 1,

	data: {}, //TODO
	//////////////
	PropTypes: {
		viewport: PropTypes.object, //TODO objectOf
		boundary: PropTypes.object, //TODO objectOf
		orientationControls: PropTypes.object, //TODO objectOf
		customClass: PropTypes.string,
		showZoomer: PropTypes.bool,
		enableZoom: PropTypes.bool,
		mouseWheelZoom: PropTypes.bool,
		enableExif: PropTypes.bool,
		enforceBoundary: PropTypes.bool,
		enableOrientation: PropTypes.bool,
		update: PropTypes.func,
		url: PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {};
	},
	componentDidMount: function componentDidMount() {
		this._bind(this.props.url);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.url !== this.props.url) this._bind(nextProps.url);
	},
	getDefaultProps: function getDefaultProps() {
		return {
			viewport: {
				width: 100,
				height: 100,
				type: 'circle'
			},
			boundary: {
				width: 300,
				height: 300
			},
			orientationControls: {
				enabled: true,
				leftClass: '',
				rightClass: ''
			},
			customClass: '',
			showZoomer: true,
			enableZoom: true,
			mouseWheelZoom: true,
			enableExif: false,
			enforceBoundary: true,
			enableOrientation: false,
			update: function update() {}
		};
	},
	render: function render() {
		var self = this,
		    contClass = 'croppie-container',
		    customViewportClass = this.props.viewport.type ? 'cr-vp-' + this.props.viewport.type : " ",
		    preview;
		if (self.props.enableOrientation) preview = React.createElement("canvas", { className: "cr-image", ref: "preview", style: this.state.previewStyle || {} }, " ");else preview = React.createElement("img", { src: "", className: "cr-image", ref: "preview", style: this.state.previewStyle || {} });

		var onWheelFunc = this.props.enableZoom ? this.onWheel : function () {};
		return _jsx("div", {
			className: contClass
		}, void 0, React.createElement("div", { className: "cr-boundary",
			ref: "boundary",
			style: { width: this.props.boundary.width, height: this.props.boundary.height },
			onWheel: onWheelFunc
		}, preview, React.createElement("div", { tabIndex: "0",
			onKeyDown: this.keyDown,
			ref: "viewport",
			className: "cr-viewport " + customViewportClass,
			style: { width: this.props.viewport.width, height: this.props.viewport.height }
		}), _jsx("div", {
			className: "cr-overlay",
			onTouchStart: this.mouseDown,
			onMouseDown: this.mouseDown,
			style: this.state.overlayStyle
		})), this.props.enableZoom && _jsx("div", {
			className: "cr-slider-wrap"
		}, void 0, React.createElement("input", { type: "range",
			className: "cr-slider",
			step: "0.0001",
			style: { display: this.props.showZoomer ? "" : "none" },
			onChange: this.changeZoom,
			ref: "zoomer"
		})));
	},
	onWheel: function onWheel(ev) {
		var self = this;
		var delta, targetZoom;

		if (ev.wheelDelta) {
			delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
		} else if (ev.deltaY) {
			delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
		} else if (ev.detail) {
			delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
		} else {
			delta = 0;
		}
		targetZoom = self._currentZoom + delta;

		ev.preventDefault();
		this._setZoomerVal(targetZoom);
		this.changeZoom();
	},
	mouseDown: function mouseDown(ev) {
		ev.preventDefault();
		if (this.isDragging) return;

		this.isDragging = true;
		this.originalX = ev.pageX;
		this.originalY = ev.pageY;
		if (ev.touches) {
			var touches = ev.touches[0];
			this.originalX = touches.pageX;
			this.originalY = touches.pageY;
		}

		this.transform = Transform.parse(this.refs.preview);
		window.addEventListener('mousemove', this.mouseMove);
		window.addEventListener('touchmove', this.mouseMove);
		window.addEventListener('mouseup', this.mouseUp);
		window.addEventListener('touchend', this.mouseUp);

		document.body.style[StyleRelated.CSS_USERSELECT] = 'none';
		this.vpRect = this.refs.viewport.getBoundingClientRect();
	},
	keyDown: function keyDown(ev) {
		var self = this;
		var LEFT_ARROW = 37,
		    UP_ARROW = 38,
		    RIGHT_ARROW = 39,
		    DOWN_ARROW = 40;

		if (ev.shiftKey && (ev.keyCode == UP_ARROW || ev.keyCode == DOWN_ARROW)) {
			var zoom = 0.0;
			if (ev.keyCode == UP_ARROW) {
				zoom = parseFloat(self.refs.zoomer.value, 10) + parseFloat(self.refs.zoomer.step, 10);
			} else {
				zoom = parseFloat(self.refs.zoomer.value, 10) - parseFloat(self.refs.zoomer.step, 10);
			}
			// self.setZoom(zoom);
			self._setZoomerVal(zoom);
		} else if (ev.keyCode >= 37 && ev.keyCode <= 40) {
			ev.preventDefault();
			var movement = parseKeyDown(ev.keyCode);

			self.transform = Transform.parse(self.refs.preview);
			document.body.style[StyleRelated.CSS_USERSELECT] = 'none';
			self.vpRect = self.refs.viewport.getBoundingClientRect();
			self.keyMove(movement);
		}

		function parseKeyDown(key) {
			switch (key) {
				case LEFT_ARROW:
					return [1, 0];
				case UP_ARROW:
					return [0, 1];
				case RIGHT_ARROW:
					return [-1, 0];
				case DOWN_ARROW:
					return [0, -1];
			}
		}
	},
	keyMove: function keyMove(movement) {
		var deltaX = movement[0],
		    deltaY = movement[1],
		    newCss = {};

		this.assignTransformCoordinates(deltaX, deltaY);

		newCss[StyleRelated.CSS_TRANSFORM] = this.transform.toString();
		// css(self.elements.preview, newCss);
		this.setState({
			previewStyle: newCss
		});
		this._updateOverlay();
		document.body.style[StyleRelated.CSS_USERSELECT] = '';
		this._updateCenterPoint();
		// _triggerUpdate.call(self);TODO
		this.originalDistance = 0;
	},
	mouseMove: function mouseMove(ev) {

		ev.preventDefault();
		var pageX = ev.pageX,
		    pageY = ev.pageY;

		if (ev.touches) {
			var touches = ev.touches[0];
			pageX = touches.pageX;
			pageY = touches.pageY;
		}

		var deltaX = pageX - this.originalX,
		    deltaY = pageY - this.originalY,
		    newCss = {};
		if (ev.type == 'touchmove') {
			if (ev.touches.length > 1) {
				var touch1 = ev.touches[0];
				var touch2 = ev.touches[1];
				var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

				if (!this.originalDistance) {
					this.originalDistance = dist / self._currentZoom;
				}

				var scale = dist / this.originalDistance;

				this._setZoomerVal.call(self, scale);
				//dispatchChange(self.elements.zoomer);TODO
				return;
			}
		}

		this.assignTransformCoordinates(deltaX, deltaY);
		newCss[StyleRelated.CSS_TRANSFORM] = this.transform.toString();
		//css(self.elements.preview, newCss);

		this.setState({
			previewStyle: cssExtend(newCss, this.state.previewStyle)
		});

		setTimeout(this._updateOverlay, 0);
		this.originalY = pageY;
		this.originalX = pageX;
	},
	changeZoom: function changeZoom() {
		var self = this;
		this._onZoom({
			value: parseFloat(this.refs.zoomer.value),
			origin: new TransformOrigin(self.refs.preview),
			viewportRect: self.refs.viewport.getBoundingClientRect(),
			transform: Transform.parse(self.refs.preview)
		});
	},
	mouseUp: function mouseUp() {
		this.isDragging = false;
		window.removeEventListener('mousemove', this.mouseMove);
		window.removeEventListener('touchmove', this.mouseMove);
		window.removeEventListener('mouseup', this.mouseUp);
		window.removeEventListener('touchend', this.mouseUp);
		document.body.style[StyleRelated.CSS_USERSELECT] = '';
		this._updateCenterPoint();
		// this._triggerUpdate.call(self);TODO
		this.originalDistance = 0;
	},
	_updateOverlay: function _updateOverlay() {
		var boundRect = this.refs.boundary.getBoundingClientRect(),
		    imgData = this.refs.preview.getBoundingClientRect();

		this.setState({
			overlayStyle: {
				width: imgData.width + 'px',
				height: imgData.height + 'px',
				top: imgData.top - boundRect.top + 'px',
				left: imgData.left - boundRect.left + 'px'
			}
		});
	},
	_setZoomerVal: function _setZoomerVal(v) {
		//TODO
		if (this.props.enableZoom) {
			var z = ReactDOM.findDOMNode(this.refs.zoomer),
			    val = this.fix(v, 4);
			z.value = Math.max(z.min, Math.min(z.max, val));
		}
	},
	_onZoom: function _onZoom(ui) {
		var self = this,
		    transform = ui ? ui.transform : Transform.parse(ReactDOM.findDOMNode(this.refs.preview)),
		    vpRect = ui ? ui.viewportRect : self.refs.elements.viewport.getBoundingClientRect(),

		//TODO does this need this.vpRect
		origin = ui ? ui.origin : new TransformOrigin(ReactDOM.findDOMNode(this.refs.preview)),
		    transCss = {};

		function applyCss() {
			var transCss = {};
			transCss[StyleRelated.CSS_TRANSFORM] = transform.toString();
			transCss[StyleRelated.CSS_TRANS_ORG] = origin.toString();
			self.setState({
				previewStyle: transCss
			});
		}

		self._currentZoom = ui ? ui.value : self._currentZoom;
		transform.scale = self._currentZoom;
		applyCss();

		if (this.props.enforceBoundary) {
			var boundaries = this._getVirtualBoundaries(vpRect),
			    transBoundaries = boundaries.translate,
			    oBoundaries = boundaries.origin;

			if (transform.x >= transBoundaries.maxX) {
				origin.x = oBoundaries.minX;
				transform.x = transBoundaries.maxX;
			}

			if (transform.x <= transBoundaries.minX) {
				origin.x = oBoundaries.maxX;
				transform.x = transBoundaries.minX;
			}

			if (transform.y >= transBoundaries.maxY) {
				origin.y = oBoundaries.minY;
				transform.y = transBoundaries.maxY;
			}

			if (transform.y <= transBoundaries.minY) {
				origin.y = oBoundaries.maxY;
				transform.y = transBoundaries.minY;
			}
		}
		applyCss();
		setTimeout(this._updateOverlay, 0);

		//_triggerUpdate.call(self); TODO
	},
	_getVirtualBoundaries: function _getVirtualBoundaries(viewport) {
		//TODO
		var self = this,
		    scale = self._currentZoom,
		    vpWidth = viewport.width,
		    vpHeight = viewport.height,
		    centerFromBoundaryX = self.props.boundary.width / 2,
		    centerFromBoundaryY = self.props.boundary.height / 2,
		    imgRect = self.refs.preview.getBoundingClientRect(),
		    curImgWidth = imgRect.width,
		    curImgHeight = imgRect.height,
		    halfWidth = vpWidth / 2,
		    halfHeight = vpHeight / 2;

		var maxX = (halfWidth / scale - centerFromBoundaryX) * -1;
		var minX = maxX - (curImgWidth * (1 / scale) - vpWidth * (1 / scale));

		var maxY = (halfHeight / scale - centerFromBoundaryY) * -1;
		var minY = maxY - (curImgHeight * (1 / scale) - vpHeight * (1 / scale));

		var originMinX = 1 / scale * halfWidth;
		var originMaxX = curImgWidth * (1 / scale) - originMinX;

		var originMinY = 1 / scale * halfHeight;
		var originMaxY = curImgHeight * (1 / scale) - originMinY;

		return {
			translate: {
				maxX: maxX,
				minX: minX,
				maxY: maxY,
				minY: minY
			},
			origin: {
				maxX: originMaxX,
				minX: originMinX,
				maxY: originMaxY,
				minY: originMinY
			}
		};
	},
	fix: function fix(v, decimalPoints) {
		return parseFloat(v).toFixed(decimalPoints || 0);
	},
	_bind: function _bind(options) {
		var self = this,
		    url,
		    points = [],
		    zoom = null;

		if (typeof options === 'string') {
			url = options;
			options = {};
		} else if (Array.isArray(options)) {
			points = options.slice();
		} else if (typeof options == 'undefined' && self.data.url) {
			//refreshing TODO
			this._updatePropertiesFromImage.call(self);
			// _triggerUpdate.call(self);TODO
			return null;
		} else {
			url = options.url;
			points = options.points || [];
			zoom = typeof options.zoom === 'undefined' ? null : options.zoom;
		}

		self.data.bound = false;
		self.data.url = url || self.data.url;
		self.data.points = (points || self.data.points).map(function (p) {
			return parseFloat(p);
		});
		self.data.boundZoom = zoom;
		var prom = this.loadImage(url, self.refs.preview);
		prom.then(function () {
			self._updatePropertiesFromImage.call(self);
			// _triggerUpdate.call(self);TODO
		});
		return prom;
	},
	loadImage: function loadImage(src, imageEl) {
		var self = this;
		var img = imageEl || new Image(),
		    prom;

		if (img.src === src) {
			// If image source hasn't changed, return a promise that resolves immediately
			prom = new Promise(function (resolve, reject) {
				resolve(img);
			});
		} else {
			prom = new Promise(function (resolve, reject) {
				if (self.props.enableOrientation && src.substring(0, 4).toLowerCase() === 'http') {
					img.setAttribute('crossOrigin', 'anonymous');
				}
				img.onload = function () {
					setTimeout(function () {
						resolve(img);
					}, 1);
				};
			});

			img.src = src;
		}

		return prom;
	},
	_updatePropertiesFromImage: function _updatePropertiesFromImage() {
		var self = this,
		    minZoom = 0,
		    maxZoom = 1.5,
		    initialZoom = 1,
		    cssReset = {},
		    img = self.refs.preview,
		    zoomer = self.refs.zoomer,
		    transformReset = new Transform(0, 0, initialZoom),
		    originReset = new TransformOrigin(),
		    isVisible = this._isVisible(self),
		    imgData,
		    vpData,
		    boundaryData,
		    minW,
		    minH;

		if (!isVisible || self.data.bound) {
			// if the croppie isn't visible or it doesn't need binding
			console.warn("WHAAAAAAAAAAAAAAAAAAAAAAAAAAAT");
			return;
		}

		self.data.bound = true;
		cssReset[StyleRelated.CSS_TRANSFORM] = transformReset.toString();
		cssReset[StyleRelated.CSS_TRANS_ORG] = originReset.toString();
		cssReset['opacity'] = 1;
		this.setState({
			previewStyle: cssReset
		});

		imgData = img.getBoundingClientRect();
		vpData = self.refs.viewport.getBoundingClientRect();
		boundaryData = self.refs.boundary.getBoundingClientRect();
		self._originalImageWidth = imgData.width;
		self._originalImageHeight = imgData.height;

		if (self.props.enableZoom) {
			if (self.props.enforceBoundary) {
				minW = vpData.width / imgData.width;
				minH = vpData.height / imgData.height;
				minZoom = Math.max(minW, minH);
			}

			if (minZoom >= maxZoom) {
				maxZoom = minZoom + 1;
			}

			zoomer.min = this.fix(minZoom, 4);
			zoomer.max = this.fix(maxZoom, 4);
			var defaultInitialZoom = Math.max(boundaryData.width / imgData.width, boundaryData.height / imgData.height);
			initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
			this._setZoomerVal(initialZoom);
			this._currentZoom = initialZoom;
			//dispatchChange(zoomer);TODO
		} else {
			self._currentZoom = initialZoom;
		}

		transformReset.scale = self._currentZoom;
		cssReset[StyleRelated.CSS_TRANSFORM] = transformReset.toString();
		this.setState({
			previewStyle: cssReset
		});

		if (self.data.points.length) {
			console.warn("damn _bindPoints is called");
			//_bindPoints.call(self, self.data.points);
		} else {
			this._centerImage.call(self);
		}

		this._updateCenterPoint.call(self);
		this._updateOverlay.call(self);
	},
	_isVisible: function _isVisible() {
		//TODO
		return this.refs.preview.offsetHeight > 0 && this.refs.preview.offsetWidth > 0;
	},
	_centerImage: function _centerImage() {
		var self = this,
		    imgDim = self.refs.preview.getBoundingClientRect(),
		    vpDim = self.refs.viewport.getBoundingClientRect(),
		    boundDim = self.refs.boundary.getBoundingClientRect(),
		    vpLeft = vpDim.left - boundDim.left,
		    vpTop = vpDim.top - boundDim.top,
		    w = vpLeft - (imgDim.width - vpDim.width) / 2,
		    h = vpTop - (imgDim.height - vpDim.height) / 2,
		    transform = new Transform(w, h, self._currentZoom);

		//css(self.elements.preview, CSS_TRANSFORM, transform.toString());
		var previewStyle = {};
		previewStyle[StyleRelated.CSS_TRANSFORM] = transform.toString();
		this.setState({
			previewStyle: previewStyle
		});
	},
	_updateCenterPoint: function _updateCenterPoint() {
		var self = this,
		    scale = self._currentZoom,
		    data = self.refs.preview.getBoundingClientRect(),
		    vpData = self.refs.viewport.getBoundingClientRect(),
		    transform = Transform.parse(self.refs.preview.style[StyleRelated.CSS_TRANSFORM]),
		    pc = new TransformOrigin(self.refs.preview),
		    top = vpData.top - data.top + vpData.height / 2,
		    left = vpData.left - data.left + vpData.width / 2,
		    center = {},
		    adj = {};

		center.y = top / scale;
		center.x = left / scale;
		adj.y = (center.y - pc.y) * (1 - scale);
		adj.x = (center.x - pc.x) * (1 - scale);

		transform.x -= adj.x;
		transform.y -= adj.y;

		var newCss = {};
		newCss[StyleRelated.CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
		newCss[StyleRelated.CSS_TRANSFORM] = transform.toString();
		//css(self.elements.preview, newCss);
		this.setState({
			previewStyle: newCss
		});
	},
	assignTransformCoordinates: function assignTransformCoordinates(deltaX, deltaY) {
		var self = this;
		var imgRect = self.refs.preview.getBoundingClientRect(),
		    top = this.transform.y + deltaY,
		    left = this.transform.x + deltaX;

		if (self.props.enforceBoundary) {
			if (this.vpRect.top > imgRect.top + deltaY && this.vpRect.bottom < imgRect.bottom + deltaY) {
				this.transform.y = top;
			}

			if (this.vpRect.left > imgRect.left + deltaX && this.vpRect.right < imgRect.right + deltaX) {
				this.transform.x = left;
			}
		} else {
			this.transform.y = top;
			this.transform.x = left;
		}
	},

	RESULT_DEFAULTS: {
		type: 'canvas',
		format: 'png',
		quality: 1
	},
	RESULT_FORMATS: ['jpeg', 'webp', 'png'],
	result: function result(options) {
		var self = this,
		    data = this._get(),
		    opts = deepExtend(deepExtend({}, this.RESULT_DEFAULTS), deepExtend({}, options)),
		    type = typeof options === 'string' ? options : opts.type || 'viewport',
		    size = opts.size,
		    format = opts.format,
		    quality = opts.quality,
		    backgroundColor = opts.backgroundColor,
		    circle = typeof opts.circle === 'boolean' ? opts.circle : self.props.viewport.type === 'circle',
		    vpRect = self.refs.viewport.getBoundingClientRect(),
		    ratio = vpRect.width / vpRect.height,
		    prom;
		console.log("results defaults are", this.RESULT_DEFAULTS);
		if (size === 'viewport') {
			data.outputWidth = vpRect.width;
			data.outputHeight = vpRect.height;
		} else if ((typeof size === "undefined" ? "undefined" : _typeof(size)) === 'object') {
			if (size.width && size.height) {
				data.outputWidth = size.width;
				data.outputHeight = size.height;
			} else if (size.width) {
				data.outputWidth = size.width;
				data.outputHeight = size.width / ratio;
			} else if (size.height) {
				data.outputWidth = size.height * ratio;
				data.outputHeight = size.height;
			}
		}

		if (this.RESULT_FORMATS.indexOf(format) > -1) {
			data.format = 'image/' + format;
			data.quality = quality;
		}

		data.circle = circle;
		data.url = self.data.url;
		data.backgroundColor = backgroundColor;

		prom = new Promise(function (resolve, reject) {
			if (type === 'rawCanvas') {
				resolve(self._getCanvasResult(self.refs.preview, data));
			}
			if (type === 'canvas' || type == 'base64') {
				resolve(self._getBase64Result(data));
			} else if (type === 'blob') {
				resolve(self._getBlobResult(data));
			} else resolve(self._getHtmlResult(data));
		});
		return prom;
	},
	_getHtmlResult: function _getHtmlResult(data) {
		var points = data.points;
		return _jsx("div", {
			className: "croppie-result",
			style: { width: points[2] - points[0], height: points[3] - points[1] }
		}, void 0, _jsx("img", {
			src: data.url,
			style: { left: -1 * points[0] + 'px', top: -1 * points[1] + 'px' }
		}));
	},
	_getBase64Result: function _getBase64Result(data) {
		var self = this;
		return self._getCanvasResult(self.refs.preview, data).toDataURL(data.format, data.quality);
	},
	_getBlobResult: function _getBlobResult(data) {
		var self = this;
		return new Promise(function (resolve, reject) {
			var canvasRes = self._getCanvasResult(self.refs.preview, data);
			canvasRes.toBlob(function (blob) {
				resolve(blob);
			}, data.format, data.quality);
		});
	},
	_get: function _get() {
		//TODO
		var self = this,
		    imgData = self.refs.preview.getBoundingClientRect(),
		    vpData = self.refs.viewport.getBoundingClientRect(),
		    x1 = vpData.left - imgData.left,
		    y1 = vpData.top - imgData.top,
		    widthDiff = (vpData.width - self.refs.viewport.offsetWidth) / 2,
		    heightDiff = (vpData.height - self.refs.viewport.offsetHeight) / 2,
		    x2 = x1 + self.refs.viewport.offsetWidth + widthDiff,
		    y2 = y1 + self.refs.viewport.offsetHeight + heightDiff,
		    scale = self._currentZoom;

		if (scale === Infinity || isNaN(scale)) {
			scale = 1;
		}

		var max = self.props.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
		x1 = Math.max(max, x1 / scale);
		y1 = Math.max(max, y1 / scale);
		x2 = Math.max(max, x2 / scale);
		y2 = Math.max(max, y2 / scale);

		return {
			points: [this.fix(x1), this.fix(y1), this.fix(x2), this.fix(y2)],
			zoom: scale
		};
	},
	_getCanvasResult: function _getCanvasResult(img, data) {
		var points = data.points,
		    left = points[0],
		    top = points[1],
		    width = points[2] - points[0],
		    height = points[3] - points[1],
		    circle = data.circle,
		    canvas = document.createElement('canvas'),
		    ctx = canvas.getContext('2d'),
		    outWidth = width,
		    outHeight = height;

		if (data.outputWidth && data.outputHeight) {
			outWidth = data.outputWidth;
			outHeight = data.outputHeight;
		}

		canvas.width = outWidth;
		canvas.height = outHeight;

		if (data.backgroundColor) {
			ctx.fillStyle = data.backgroundColor;
			ctx.fillRect(0, 0, outWidth, outHeight);
		}
		ctx.drawImage(img, left, top, width, height, 0, 0, outWidth, outHeight);
		if (circle) {
			ctx.fillStyle = '#fff';
			ctx.globalCompositeOperation = 'destination-in';
			ctx.beginPath();
			ctx.arc(outWidth / 2, outHeight / 2, outWidth / 2, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
		return canvas;
	}
});

module.exports = Croppie;

function deepExtend(destination, source) {
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
}

function cssExtend(source, old) {
	for (var key in old) {
		if (!old.hasOwnProperty(key)) continue;
		if (!source[key]) source[key] = old[key];
	}
	return source;
}
//TODO

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var StylesRelated = __webpack_require__(4);
var _TRANSLATE = 'translate3d',
    _TRANSLATE_SUFFIX = ', 0px';

var Transform = function () {
	function Transform(x, y, scale) {
		_classCallCheck(this, Transform);

		this.x = parseFloat(x);
		this.y = parseFloat(y);
		this.scale = parseFloat(scale);
	}

	_createClass(Transform, [{
		key: 'toString',
		value: function toString() {
			return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
		}
	}], [{
		key: 'parse',
		value: function parse(v) {
			// console.log("StylesRelated.CSS_TRANSFORM",StylesRelated.CSS_TRANSFORM);
			if (v.style) {
				return Transform.parse(v.style[StylesRelated.CSS_TRANSFORM]);
			} else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
				return Transform.fromMatrix(v);
			} else {
				return Transform.fromString(v);
			}
		}
	}, {
		key: 'fromMatrix',
		value: function fromMatrix(v) {
			var vals = v.substring(7).split(',');
			if (!vals.length || v === 'none') {
				vals = [1, 0, 0, 1, 0, 0];
			}

			return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
		}
	}, {
		key: 'fromString',
		value: function fromString(v) {
			var values = v.split(') '),
			    translate = values[0].substring(_TRANSLATE.length + 1).split(','),
			    scale = values.length > 1 ? values[1].substring(6) : 1,
			    x = translate.length > 1 ? translate[0] : 0,
			    y = translate.length > 1 ? translate[1] : 0;

			return new Transform(x, y, scale);
		}
	}]);

	return Transform;
}();

module.exports = Transform;

// var Transform = function (x, y, scale) {
// 	this.x = parseFloat(x);
// 	this.y = parseFloat(y);
// 	this.scale = parseFloat(scale);
// };

// Transform.parse = function (v) {
// 	if (v.style) {
// 		return Transform.parse(v.style[CSS_TRANSFORM]);
// 	}
// 	else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
// 		return Transform.fromMatrix(v);
// 	}
// 	else {
// 		return Transform.fromString(v);
// 	}
// };

// Transform.fromMatrix = function (v) {
// 	var vals = v.substring(7).split(',');
// 	if (!vals.length || v === 'none') {
// 		vals = [1, 0, 0, 1, 0, 0];
// 	}
//
// 	return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
// };

// Transform.fromString = function (v) {
// 	var values = v.split(') '),
// 		translate = values[0].substring(_TRANSLATE.length + 1).split(','),
// 		scale = values.length > 1 ? values[1].substring(6) : 1,
// 		x = translate.length > 1 ? translate[0] : 0,
// 		y = translate.length > 1 ? translate[1] : 0;
//
// 	return new Transform(x, y, scale);
// };
//
// Transform.prototype.toString = function () {
// 	return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
// };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(5);
var assign = __webpack_require__(10);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(11);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);