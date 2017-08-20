"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "ngrave",
              			"path": "ngrave/ngrave.js",
              			"file": "ngrave.js",
              			"module": "ngrave",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ngrave.git",
              			"test": "ngrave-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Push symbol property value.
              
              		If you passed a non-symbol type symbol value, then it will
              			be transformed to a unique symbol.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"mtch": "mtch",
              			"protype": "protype"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var mtch = require("mtch");
var protype = require("protype");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var ngrave = function ngrave(symbol, entity, value) {
	/*;
                                                     	@meta-configuration:
                                                     		{
                                                     			"symbol:required": [
                                                     				"number",
                                                     				"string",
                                                     				"symbol"
                                                     			],
                                                     			"entity:required": [
                                                     				"function",
                                                     				"object"
                                                     			]
                                                     		}
                                                     	@end-meta-configuration
                                                     */

	if (falzy(symbol) || !protype(symbol, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid symbol");
	}

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if ((typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) != SYMBOL) {
		symbol = (0, _symbol2.default)(symbol);
	}

	var string = mtch(symbol.toString(), SYMBOL_PATTERN, 1);

	symbol = (0, _getOwnPropertySymbols2.default)(entity).reduce(function (symbol, property) {
		if (mtch(property.toString(), SYMBOL_PATTERN, 1) == string) {
			return property;
		}

		return symbol;
	}, symbol);

	try {
		entity[symbol] = value;

	} catch (error) {}

	return entity;
};

module.exports = ngrave;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ncmF2ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm10Y2giLCJwcm90eXBlIiwiU1lNQk9MX1BBVFRFUk4iLCJuZ3JhdmUiLCJzeW1ib2wiLCJlbnRpdHkiLCJ2YWx1ZSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5IiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLGlCQUFpQixtQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3REOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlSLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkcsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQk0sV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT04sTUFBUCx1REFBT0EsTUFBUCxNQUFpQkssTUFBckIsRUFBNkI7QUFDNUJMLFdBQVMsc0JBQVFBLE1BQVIsQ0FBVDtBQUNBOztBQUVELEtBQUlTLFNBQVNiLEtBQU1JLE9BQU9VLFFBQVAsRUFBTixFQUEwQlosY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBYjs7QUFFQUUsVUFBUyxxQ0FBOEJDLE1BQTlCLEVBQXVDVSxNQUF2QyxDQUErQyxVQUFFWCxNQUFGLEVBQVVZLFFBQVYsRUFBd0I7QUFDL0UsTUFBSWhCLEtBQU1nQixTQUFTRixRQUFULEVBQU4sRUFBNEJaLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1EVyxNQUF2RCxFQUErRDtBQUM5RCxVQUFPRyxRQUFQO0FBQ0E7O0FBRUQsU0FBT1osTUFBUDtBQUNBLEVBTlEsRUFNTkEsTUFOTSxDQUFUOztBQVFBLEtBQUc7QUFDRkMsU0FBUUQsTUFBUixJQUFtQkUsS0FBbkI7O0FBRUEsRUFIRCxDQUdDLE9BQU9XLEtBQVAsRUFBYyxDQUFHOztBQUVsQixRQUFPWixNQUFQO0FBQ0EsQ0E3Q0Q7O0FBK0NBYSxPQUFPQyxPQUFQLEdBQWlCaEIsTUFBakIiLCJmaWxlIjoibmdyYXZlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibmdyYXZlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm5ncmF2ZS9uZ3JhdmUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibmdyYXZlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibmdyYXZlXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25ncmF2ZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwibmdyYXZlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UHVzaCBzeW1ib2wgcHJvcGVydHkgdmFsdWUuXHJcblxyXG5cdFx0SWYgeW91IHBhc3NlZCBhIG5vbi1zeW1ib2wgdHlwZSBzeW1ib2wgdmFsdWUsIHRoZW4gaXQgd2lsbFxyXG5cdFx0XHRiZSB0cmFuc2Zvcm1lZCB0byBhIHVuaXF1ZSBzeW1ib2wuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwibXRjaFwiOiBcIm10Y2hcIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcblxyXG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4rPylcXCkkLztcclxuXHJcbmNvbnN0IG5ncmF2ZSA9IGZ1bmN0aW9uIG5ncmF2ZSggc3ltYm9sLCBlbnRpdHksIHZhbHVlICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzeW1ib2w6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcInN5bWJvbFwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggc3ltYm9sICkgfHwgIXByb3R5cGUoIHN5bWJvbCwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN5bWJvbFwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApIHx8ICFwcm90eXBlKCBlbnRpdHksIEZVTkNUSU9OICsgT0JKRUNUICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIHN5bWJvbCAhPSBTWU1CT0wgKXtcclxuXHRcdHN5bWJvbCA9IFN5bWJvbCggc3ltYm9sICk7XHJcblx0fVxyXG5cclxuXHRsZXQgc3RyaW5nID0gbXRjaCggc3ltYm9sLnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApO1xyXG5cclxuXHRzeW1ib2wgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBlbnRpdHkgKS5yZWR1Y2UoICggc3ltYm9sLCBwcm9wZXJ0eSApID0+IHtcclxuXHRcdGlmKCBtdGNoKCBwcm9wZXJ0eS50b1N0cmluZyggKSwgU1lNQk9MX1BBVFRFUk4sIDEgKSA9PSBzdHJpbmcgKXtcclxuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzeW1ib2w7XHJcblx0fSwgc3ltYm9sICk7XHJcblxyXG5cdHRyeXtcclxuXHRcdGVudGl0eVsgc3ltYm9sIF0gPSB2YWx1ZTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApeyB9XHJcblxyXG5cdHJldHVybiBlbnRpdHk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ncmF2ZTtcclxuIl19
//# sourceMappingURL=ngrave.support.js.map
