"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transform = require("./Transform");

var _Transform2 = _interopRequireDefault(_Transform);

var _styleStuff = require("./styleStuff");

var _styleStuff2 = _interopRequireDefault(_styleStuff);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Croppie = function (_React$Component) {
    _inherits(Croppie, _React$Component);

    function Croppie(props) {
        _classCallCheck(this, Croppie);

        var _this = _possibleConstructorReturn(this, (Croppie.__proto__ || Object.getPrototypeOf(Croppie)).call(this, props));

        _this.isDragging = false;
        _this.originalX = null;
        _this.originalY = null;
        _this.originalDistance = null;
        _this.vpRect = null;
        _this.transform = null;
        _this._currentZoom = 1;
        _this.data = {}; //TODO

        _this.state = {};

        _this._bind = _this._bind.bind(_this);
        _this.onWheel = _this.onWheel.bind(_this);
        _this.mouseDown = _this.mouseDown.bind(_this);
        _this.keyDown = _this.keyDown.bind(_this);
        _this.keyMove = _this.keyMove.bind(_this);
        _this.changeZoom = _this.changeZoom.bind(_this);
        _this.mouseUp = _this.mouseUp.bind(_this);
        _this._updateOverlay = _this._updateOverlay.bind(_this);
        _this._setZoomerVal = _this._setZoomerVal.bind(_this);
        _this._onZoom = _this._onZoom.bind(_this);
        _this._getVirtualBoundaries = _this._getVirtualBoundaries.bind(_this);
        _this._updatePropertiesFromImage = _this._updatePropertiesFromImage.bind(_this);
        _this.mouseMove = _this.mouseMove.bind(_this);
        _this.result = _this.result.bind(_this);

        _this.preview = null;
        _this.viewport = null;
        _this.zoomer = null;
        _this.boundary = null;
        return _this;
    }

    _createClass(Croppie, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._bind(this.props.url);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.url !== this.props.url) this._bind(nextProps.url);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var contClass = 'croppie-container';
            var customViewportClass = this.props.viewport.type ? 'cr-vp-' + this.props.viewport.type : " ";
            var preview;

            if (this.props.enableOrientation) {
                preview = _react2.default.createElement(
                    "canvas",
                    { className: "cr-image", ref: function ref(preview) {
                            _this2.preview = preview;
                        }, style: this.state.previewStyle || {} },
                    " "
                );
            } else {
                preview = _react2.default.createElement("img", { src: "", className: "cr-image", ref: function ref(preview) {
                        _this2.preview = preview;
                    }, style: this.state.previewStyle || {} });
            }

            var onWheelFunc = this.props.enableZoom ? this.onWheel : function () {};
            return _react2.default.createElement(
                "div",
                { className: contClass },
                _react2.default.createElement(
                    "div",
                    { className: "cr-boundary",
                        ref: function ref(boundary) {
                            _this2.boundary = boundary;
                        },
                        style: { width: this.props.boundary.width, height: this.props.boundary.height },
                        onWheel: onWheelFunc
                    },
                    preview,
                    _react2.default.createElement("div", { tabIndex: "0",
                        onKeyDown: this.keyDown.bind(this),
                        ref: function ref(viewport) {
                            _this2.viewport = viewport;
                        },
                        className: "cr-viewport " + customViewportClass,
                        style: { width: this.props.viewport.width, height: this.props.viewport.height }
                    }),
                    _react2.default.createElement("div", { className: "cr-overlay",
                        onTouchStart: this.mouseDown.bind(this),
                        onMouseDown: this.mouseDown.bind(this),
                        style: this.state.overlayStyle
                    })
                ),
                this.props.enableZoom && _react2.default.createElement(
                    "div",
                    { className: "cr-slider-wrap" },
                    _react2.default.createElement("input", { type: "range",
                        className: "cr-slider",
                        step: "0.0001",
                        style: { display: this.props.showZoomer ? "" : "none" },
                        onChange: this.changeZoom.bind(this),
                        ref: function ref(zoomer) {
                            _this2.zoomer = zoomer;
                        }
                    })
                )
            );
        }
    }, {
        key: "onWheel",
        value: function onWheel(ev) {
            var self = this;
            var delta;
            var targetZoom;

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
        }
    }, {
        key: "mouseDown",
        value: function mouseDown(ev) {
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

            this.transform = _Transform2.default.parse(this.preview);
            window.addEventListener('mousemove', this.mouseMove);
            window.addEventListener('touchmove', this.mouseMove);
            window.addEventListener('mouseup', this.mouseUp);
            window.addEventListener('touchend', this.mouseUp);

            document.body.style[_styleStuff2.default.CSS_USERSELECT] = 'none';
            this.vpRect = this.viewport.getBoundingClientRect();
        }
    }, {
        key: "keyDown",
        value: function keyDown(ev) {
            var self = this;
            var LEFT_ARROW = 37;
            var UP_ARROW = 38;
            var RIGHT_ARROW = 39;
            var DOWN_ARROW = 40;

            if (ev.shiftKey && (ev.keyCode == UP_ARROW || ev.keyCode == DOWN_ARROW)) {
                var zoom = 0.0;
                if (ev.keyCode == UP_ARROW) {
                    zoom = parseFloat(this.zoomer.value, 10) + parseFloat(this.zoomer.step, 10);
                } else {
                    zoom = parseFloat(this.zoomer.value, 10) - parseFloat(this.zoomer.step, 10);
                }
                // self.setZoom(zoom);
                self._setZoomerVal(zoom);
            } else if (ev.keyCode >= 37 && ev.keyCode <= 40) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                self.transform = _Transform2.default.parse(this.preview);
                document.body.style[_styleStuff2.default.CSS_USERSELECT] = 'none';
                self.vpRect = this.viewport.getBoundingClientRect();
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
        }
    }, {
        key: "keyMove",
        value: function keyMove(movement) {
            var deltaX = movement[0];
            var deltaY = movement[1];
            var newCss = {};

            this.assignTransformCoordinates(deltaX, deltaY);

            newCss[_styleStuff2.default.CSS_TRANSFORM] = this.transform.toString();
            // css(self.elements.preview, newCss);
            this.setState({
                previewStyle: newCss
            });
            this._updateOverlay();
            document.body.style[_styleStuff2.default.CSS_USERSELECT] = '';
            this._updateCenterPoint();
            // _triggerUpdate.call(self);TODO
            this.originalDistance = 0;
        }
    }, {
        key: "mouseMove",
        value: function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - this.originalX;
            var deltaY = pageY - this.originalY;
            var newCss = {};
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
            newCss[_styleStuff2.default.CSS_TRANSFORM] = this.transform.toString();
            //css(self.elements.preview, newCss);

            this.setState({
                previewStyle: (0, _helpers.cssExtend)(newCss, this.state.previewStyle)
            });

            setTimeout(this._updateOverlay, 0);
            this.originalY = pageY;
            this.originalX = pageX;
        }
    }, {
        key: "changeZoom",
        value: function changeZoom() {
            var self = this;
            this._onZoom({
                value: parseFloat(this.zoomer.value),
                origin: new _helpers.TransformOrigin(this.preview),
                viewportRect: this.viewport.getBoundingClientRect(),
                transform: _Transform2.default.parse(this.preview)
            });
        }
    }, {
        key: "mouseUp",
        value: function mouseUp() {
            this.isDragging = false;
            window.removeEventListener('mousemove', this.mouseMove);
            window.removeEventListener('touchmove', this.mouseMove);
            window.removeEventListener('mouseup', this.mouseUp);
            window.removeEventListener('touchend', this.mouseUp);
            document.body.style[_styleStuff2.default.CSS_USERSELECT] = '';
            this._updateCenterPoint();
            // this._triggerUpdate.call(self);TODO
            this.originalDistance = 0;
        }
    }, {
        key: "_updateOverlay",
        value: function _updateOverlay() {
            var boundRect = this.boundary.getBoundingClientRect();
            var imgData = this.preview.getBoundingClientRect();

            this.setState({
                overlayStyle: {
                    width: imgData.width + 'px',
                    height: imgData.height + 'px',
                    top: imgData.top - boundRect.top + 'px',
                    left: imgData.left - boundRect.left + 'px'
                }
            });
        }
    }, {
        key: "_setZoomerVal",
        value: function _setZoomerVal(v) {
            //TODO
            if (this.props.enableZoom) {
                var z = _reactDom2.default.findDOMNode(this.zoomer);
                var val = this.fix(v, 4);
                z.value = Math.max(z.min, Math.min(z.max, val));
            }
        }
    }, {
        key: "_onZoom",
        value: function _onZoom(ui) {
            var self = this;
            var transform = ui ? ui.transform : _Transform2.default.parse(_reactDom2.default.findDOMNode(this.preview));

            var //TODO does this need this.vpRect
            vpRect = ui ? ui.viewportRect : this.elements.viewport.getBoundingClientRect();

            var origin = ui ? ui.origin : new _helpers.TransformOrigin(_reactDom2.default.findDOMNode(this.preview));
            var transCss = {};

            function applyCss() {
                var transCss = {};
                transCss[_styleStuff2.default.CSS_TRANSFORM] = transform.toString();
                transCss[_styleStuff2.default.CSS_TRANS_ORG] = origin.toString();
                self.setState({
                    previewStyle: transCss
                });
            }

            self._currentZoom = ui ? ui.value : self._currentZoom;
            transform.scale = self._currentZoom;
            applyCss();

            if (this.props.enforceBoundary) {
                var boundaries = this._getVirtualBoundaries(vpRect);
                var transBoundaries = boundaries.translate;
                var oBoundaries = boundaries.origin;

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
        }
    }, {
        key: "_getVirtualBoundaries",
        value: function _getVirtualBoundaries(viewport) {
            //TODO
            var self = this;

            var scale = self._currentZoom;
            var vpWidth = viewport.width;
            var vpHeight = viewport.height;
            var centerFromBoundaryX = self.props.boundary.width / 2;
            var centerFromBoundaryY = self.props.boundary.height / 2;
            var imgRect = this.preview.getBoundingClientRect();
            var curImgWidth = imgRect.width;
            var curImgHeight = imgRect.height;
            var halfWidth = vpWidth / 2;
            var halfHeight = vpHeight / 2;

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
        }
    }, {
        key: "fix",
        value: function fix(v, decimalPoints) {
            return parseFloat(v).toFixed(decimalPoints || 0);
        }
    }, {
        key: "_bind",
        value: function _bind(options) {
            var _this3 = this;

            var url;
            var points = [];
            var zoom = null;

            if (typeof options === 'string') {
                url = options;
                options = {};
            } else if (Array.isArray(options)) {
                points = options.slice();
            } else if (typeof options == 'undefined' && this.data.url) {
                //refreshing TODO
                this._updatePropertiesFromImage.call(this);
                // _triggerUpdate.call(self);TODO
                return null;
            } else {
                url = options.url;
                points = options.points || [];
                zoom = typeof options.zoom === 'undefined' ? null : options.zoom;
            }

            this.data.bound = false;
            this.data.url = url || this.data.url;
            this.data.points = (points || this.data.points).map(function (p) {
                return parseFloat(p);
            });
            this.data.boundZoom = zoom;
            var prom = this.loadImage(url, this.preview);
            prom.then(function () {
                _this3._updatePropertiesFromImage.call(self);
                // _triggerUpdate.call(self);TODO
            });
            return prom;
        }
    }, {
        key: "loadImage",
        value: function loadImage(src, imageEl) {
            var self = this;
            var img = imageEl || new Image();
            var prom;

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
        }
    }, {
        key: "_updatePropertiesFromImage",
        value: function _updatePropertiesFromImage() {
            var self = this;
            var minZoom = 0;
            var maxZoom = 1.5;
            var initialZoom = 1;
            var cssReset = {};
            var img = this.preview;
            var zoomer = this.zoomer;
            var transformReset = new _Transform2.default(0, 0, initialZoom);
            var originReset = new _helpers.TransformOrigin();
            var isVisible = this._isVisible(self);
            var imgData;
            var vpData;
            var boundaryData;
            var minW;
            var minH;

            if (!isVisible || self.data.bound) {
                // if the croppie isn't visible or it doesn't need binding
                console.warn("WHAAAAAAAAAAAAAAAAAAAAAAAAAAAT");
                return;
            }

            self.data.bound = true;
            cssReset[_styleStuff2.default.CSS_TRANSFORM] = transformReset.toString();
            cssReset[_styleStuff2.default.CSS_TRANS_ORG] = originReset.toString();
            cssReset['opacity'] = 1;
            this.setState({
                previewStyle: cssReset
            });

            imgData = img.getBoundingClientRect();
            vpData = this.viewport.getBoundingClientRect();
            boundaryData = this.boundary.getBoundingClientRect();
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
            cssReset[_styleStuff2.default.CSS_TRANSFORM] = transformReset.toString();
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
        }
    }, {
        key: "_isVisible",
        value: function _isVisible() {
            //TODO
            return this.preview.offsetHeight > 0 && this.preview.offsetWidth > 0;
        }
    }, {
        key: "_centerImage",
        value: function _centerImage() {
            var self = this;
            var imgDim = this.preview.getBoundingClientRect();
            var vpDim = this.viewport.getBoundingClientRect();
            var boundDim = this.boundary.getBoundingClientRect();
            var vpLeft = vpDim.left - boundDim.left;
            var vpTop = vpDim.top - boundDim.top;
            var w = vpLeft - (imgDim.width - vpDim.width) / 2;
            var h = vpTop - (imgDim.height - vpDim.height) / 2;
            var transform = new _Transform2.default(w, h, self._currentZoom);

            //css(self.elements.preview, CSS_TRANSFORM, transform.toString());
            var previewStyle = {};
            previewStyle[_styleStuff2.default.CSS_TRANSFORM] = transform.toString();
            this.setState({
                previewStyle: previewStyle
            });
        }
    }, {
        key: "_updateCenterPoint",
        value: function _updateCenterPoint() {
            var self = this;
            var scale = self._currentZoom;
            var data = this.preview.getBoundingClientRect();
            var vpData = this.viewport.getBoundingClientRect();
            var transform = _Transform2.default.parse(this.preview.style[_styleStuff2.default.CSS_TRANSFORM]);
            var pc = new _helpers.TransformOrigin(this.preview);
            var top = vpData.top - data.top + vpData.height / 2;
            var left = vpData.left - data.left + vpData.width / 2;
            var center = {};
            var adj = {};

            center.y = top / scale;
            center.x = left / scale;
            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;

            var newCss = {};
            newCss[_styleStuff2.default.CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
            newCss[_styleStuff2.default.CSS_TRANSFORM] = transform.toString();
            //css(self.elements.preview, newCss);
            this.setState({
                previewStyle: newCss
            });
        }
    }, {
        key: "assignTransformCoordinates",
        value: function assignTransformCoordinates(deltaX, deltaY) {
            var self = this;
            var imgRect = this.preview.getBoundingClientRect();
            var top = this.transform.y + deltaY;
            var left = this.transform.x + deltaX;

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
        }
    }, {
        key: "result",
        value: function result(options) {
            var _this4 = this;

            var self = this;
            var data = this._get();
            var opts = (0, _helpers.deepExtend)((0, _helpers.deepExtend)({}, this.RESULT_DEFAULTS), (0, _helpers.deepExtend)({}, options));
            var type = typeof options === 'string' ? options : opts.type || 'viewport';
            var size = opts.size;
            var format = opts.format;
            var quality = opts.quality;
            var backgroundColor = opts.backgroundColor;
            var circle = typeof opts.circle === 'boolean' ? opts.circle : self.props.viewport.type === 'circle';
            var vpRect = this.viewport.getBoundingClientRect();
            var ratio = vpRect.width / vpRect.height;
            var prom;
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
                    resolve(self._getCanvasResult(_this4.preview, data));
                }
                if (type === 'canvas' || type == 'base64') {
                    resolve(self._getBase64Result(data));
                } else if (type === 'blob') {
                    resolve(self._getBlobResult(data));
                } else resolve(self._getHtmlResult(data));
            });
            return prom;
        }
    }, {
        key: "_getHtmlResult",
        value: function _getHtmlResult(data) {
            var points = data.points;
            return _react2.default.createElement(
                "div",
                { className: "croppie-result", style: { width: points[2] - points[0], height: points[3] - points[1] } },
                _react2.default.createElement("img", { src: data.url, style: { left: -1 * points[0] + 'px', top: -1 * points[1] + 'px' } })
            );
        }
    }, {
        key: "_getBase64Result",
        value: function _getBase64Result(data) {
            var self = this;
            return self._getCanvasResult(this.preview, data).toDataURL(data.format, data.quality);
        }
    }, {
        key: "_getBlobResult",
        value: function _getBlobResult(data) {
            var _this5 = this;

            var self = this;
            return new Promise(function (resolve, reject) {
                var canvasRes = self._getCanvasResult(_this5.preview, data);
                canvasRes.toBlob(function (blob) {
                    resolve(blob);
                }, data.format, data.quality);
            });
        }
    }, {
        key: "_get",
        value: function _get() {
            //TODO
            var self = this;

            var imgData = this.preview.getBoundingClientRect();
            var vpData = this.viewport.getBoundingClientRect();
            var x1 = vpData.left - imgData.left;
            var y1 = vpData.top - imgData.top;
            var widthDiff = (vpData.width - this.viewport.offsetWidth) / 2;
            var heightDiff = (vpData.height - this.viewport.offsetHeight) / 2;
            var x2 = x1 + this.viewport.offsetWidth + widthDiff;
            var y2 = y1 + this.viewport.offsetHeight + heightDiff;
            var scale = self._currentZoom;

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
        }
    }, {
        key: "_getCanvasResult",
        value: function _getCanvasResult(img, data) {
            var points = data.points;
            var left = points[0];
            var top = points[1];
            var width = points[2] - points[0];
            var height = points[3] - points[1];
            var circle = data.circle;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var outWidth = width;
            var outHeight = height;

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
    }]);

    return Croppie;
}(_react2.default.Component);

;

Croppie.RESULT_DEFAULTS = {
    type: 'canvas',
    format: 'png',
    quality: 1
};

Croppie.RESULT_FORMATS = ['jpeg', 'webp', 'png'];

Croppie.defaultProps = {
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

Croppie.propTypes = {
    viewport: _propTypes2.default.object,
    boundary: _propTypes2.default.object,
    orientationControls: _propTypes2.default.object,
    customClass: _propTypes2.default.string,
    showZoomer: _propTypes2.default.bool,
    enableZoom: _propTypes2.default.bool,
    mouseWheelZoom: _propTypes2.default.bool,
    enableExif: _propTypes2.default.bool,
    enforceBoundary: _propTypes2.default.bool,
    enableOrientation: _propTypes2.default.bool,
    update: _propTypes2.default.func,
    url: _propTypes2.default.string
};

exports.default = Croppie;