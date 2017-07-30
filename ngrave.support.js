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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ncmF2ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm10Y2giLCJwcm90eXBlIiwiU1lNQk9MX1BBVFRFUk4iLCJuZ3JhdmUiLCJzeW1ib2wiLCJlbnRpdHkiLCJ2YWx1ZSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5IiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLGlCQUFpQixtQkFBdkI7O0FBRUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3REOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlSLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkcsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQk0sV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT04sTUFBUCx1REFBT0EsTUFBUCxNQUFpQkssTUFBckIsRUFBNkI7QUFDNUJMLFdBQVMsc0JBQVFBLE1BQVIsQ0FBVDtBQUNBOztBQUVELEtBQUlTLFNBQVNiLEtBQU1JLE9BQU9VLFFBQVAsRUFBTixFQUEwQlosY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBYjs7QUFFQUUsVUFBUyxxQ0FBOEJDLE1BQTlCLEVBQXVDVSxNQUF2QyxDQUErQyxVQUFFWCxNQUFGLEVBQVVZLFFBQVYsRUFBd0I7QUFDL0UsTUFBSWhCLEtBQU1nQixTQUFTRixRQUFULEVBQU4sRUFBNEJaLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1EVyxNQUF2RCxFQUErRDtBQUM5RCxVQUFPRyxRQUFQO0FBQ0E7O0FBRUQsU0FBT1osTUFBUDtBQUNBLEVBTlEsRUFNTkEsTUFOTSxDQUFUOztBQVFBLEtBQUc7QUFDRkMsU0FBUUQsTUFBUixJQUFtQkUsS0FBbkI7O0FBRUEsRUFIRCxDQUdDLE9BQU9XLEtBQVAsRUFBYyxDQUFHOztBQUVsQixRQUFPWixNQUFQO0FBQ0EsQ0E3Q0Q7O0FBK0NBYSxPQUFPQyxPQUFQLEdBQWlCaEIsTUFBakIiLCJmaWxlIjoibmdyYXZlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5ncmF2ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibmdyYXZlL25ncmF2ZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibmdyYXZlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5ncmF2ZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmdyYXZlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibmdyYXZlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UHVzaCBzeW1ib2wgcHJvcGVydHkgdmFsdWUuXG5cblx0XHRJZiB5b3UgcGFzc2VkIGEgbm9uLXN5bWJvbCB0eXBlIHN5bWJvbCB2YWx1ZSwgdGhlbiBpdCB3aWxsXG5cdFx0XHRiZSB0cmFuc2Zvcm1lZCB0byBhIHVuaXF1ZSBzeW1ib2wuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwibXRjaFwiOiBcIm10Y2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgbXRjaCA9IHJlcXVpcmUoIFwibXRjaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKz8pXFwpJC87XG5cbmNvbnN0IG5ncmF2ZSA9IGZ1bmN0aW9uIG5ncmF2ZSggc3ltYm9sLCBlbnRpdHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic3ltYm9sOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwib2JqZWN0XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBzeW1ib2wgKSB8fCAhcHJvdHlwZSggc3ltYm9sLCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN5bWJvbFwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGVudGl0eSApIHx8ICFwcm90eXBlKCBlbnRpdHksIEZVTkNUSU9OICsgT0JKRUNUICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0aWYoIHR5cGVvZiBzeW1ib2wgIT0gU1lNQk9MICl7XG5cdFx0c3ltYm9sID0gU3ltYm9sKCBzeW1ib2wgKTtcblx0fVxuXG5cdGxldCBzdHJpbmcgPSBtdGNoKCBzeW1ib2wudG9TdHJpbmcoICksIFNZTUJPTF9QQVRURVJOLCAxICk7XG5cblx0c3ltYm9sID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggZW50aXR5ICkucmVkdWNlKCAoIHN5bWJvbCwgcHJvcGVydHkgKSA9PiB7XG5cdFx0aWYoIG10Y2goIHByb3BlcnR5LnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApID09IHN0cmluZyApe1xuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdH1cblxuXHRcdHJldHVybiBzeW1ib2w7XG5cdH0sIHN5bWJvbCApO1xuXG5cdHRyeXtcblx0XHRlbnRpdHlbIHN5bWJvbCBdID0gdmFsdWU7XG5cblx0fWNhdGNoKCBlcnJvciApeyB9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmdyYXZlO1xuIl19
//# sourceMappingURL=ngrave.support.js.map
