import StylesRelated from "./styleStuff";
var _TRANSLATE = 'translate3d';
var _TRANSLATE_SUFFIX = ', 0px';

class Transform {
	constructor(x, y, scale){
		this.x = parseFloat(x);
		this.y = parseFloat(y);
		this.scale = parseFloat(scale);
	}

	static parse(v) {
		// console.log("StylesRelated.CSS_TRANSFORM",StylesRelated.CSS_TRANSFORM);
		if (v.style) {
			return Transform.parse(v.style[StylesRelated.CSS_TRANSFORM]);
		}
		else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
			return Transform.fromMatrix(v);
		}
		else {
			return Transform.fromString(v);
		}
	}

	static fromMatrix(v) {
		var vals = v.substring(7).split(',');
		if (!vals.length || v === 'none') {
			vals = [1, 0, 0, 1, 0, 0];
		}

		return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
	}

	static fromString(v) {
        var values = v.split(') ');
        var translate = values[0].substring(_TRANSLATE.length + 1).split(',');
        var scale = values.length > 1 ? values[1].substring(6) : 1;
        var x = translate.length > 1 ? translate[0] : 0;
        var y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    }

	toString() {
		return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
	}
}

export default Transform;