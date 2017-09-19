"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ngrave",
              			"path": "ngrave/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ngrave.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"ngrave": "ngrave"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var ngrave = require("./ngrave.support.js");
//: @end-client





//: @client:
describe("ngrave", function () {

	describe("`ngrave( Symbol( 'hello' ), { }, 12345 )`", function () {
		it("should contain Symbol( 'hello' ) property with value", function () {
			var symbol = (0, _symbol2.default)("hello");
			var data = {};

			ngrave(symbol, data, 12345);

			assert.equal(data[symbol], 12345);

		});
	});

	describe("`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", function () {
		it("should contain Symbol( 'extensive' ) property with value", function () {
			var symbol = (0, _for2.default)("extensive");
			var data = function Hello() {};

			ngrave((0, _for2.default)("extensive"), data, (0, _for2.default)("extensive"));

			assert.equal(data[symbol], symbol);

		});
	});

	describe("`ngrave( 'symbiosis', data, symbol )`", function () {
		it("should contain Symbol( 'symbiosis' ) property with value", function () {
			var symbol = (0, _symbol2.default)("symbiosis");
			var data = {};

			ngrave("symbiosis", data, symbol);

			assert.equal((0, _getOwnPropertySymbols2.default)(data)[0].toString(), symbol.toString());

		});
	});

	describe("`ngrave( 1, { }, 1 )`", function () {
		it("should contain Symbol( 1 ) property with value", function () {
			var data = {};
			ngrave(1, data, 1);

			assert.equal((0, _getOwnPropertySymbols2.default)(data)[0].toString(), (0, _symbol2.default)(1).toString());

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibmdyYXZlIiwiZGVzY3JpYmUiLCJpdCIsInN5bWJvbCIsImRhdGEiLCJlcXVhbCIsIkhlbGxvIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSwyQ0FBVixFQUF1RCxZQUFPO0FBQzdEQyxLQUFJLHNEQUFKLEVBQTRELFlBQU87QUFDbEUsT0FBSUMsU0FBUyxzQkFBUSxPQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7O0FBRUFKLFVBQVFHLE1BQVIsRUFBZ0JDLElBQWhCLEVBQXNCLEtBQXRCOztBQUVBTixVQUFPTyxLQUFQLENBQWNELEtBQU1ELE1BQU4sQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSx3RkFBVixFQUFvRyxZQUFPO0FBQzFHQyxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEUsT0FBSUMsU0FBUyxtQkFBWSxXQUFaLENBQWI7QUFDQSxPQUFJQyxPQUFPLFNBQVNFLEtBQVQsR0FBaUIsQ0FBRyxDQUEvQjs7QUFFQU4sVUFBUSxtQkFBWSxXQUFaLENBQVIsRUFBbUNJLElBQW5DLEVBQXlDLG1CQUFZLFdBQVosQ0FBekM7O0FBRUFOLFVBQU9PLEtBQVAsQ0FBY0QsS0FBTUQsTUFBTixDQUFkLEVBQThCQSxNQUE5Qjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSx1Q0FBVixFQUFtRCxZQUFPO0FBQ3pEQyxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEUsT0FBSUMsU0FBUyxzQkFBUSxXQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7O0FBRUFKLFVBQVEsV0FBUixFQUFxQkksSUFBckIsRUFBMkJELE1BQTNCOztBQUVBTCxVQUFPTyxLQUFQLENBQWMscUNBQThCRCxJQUE5QixFQUFzQyxDQUF0QyxFQUEwQ0csUUFBMUMsRUFBZCxFQUFxRUosT0FBT0ksUUFBUCxFQUFyRTs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQU4sVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDQyxLQUFJLGdEQUFKLEVBQXNELFlBQU87QUFDNUQsT0FBSUUsT0FBTyxFQUFYO0FBQ0FKLFVBQVEsQ0FBUixFQUFXSSxJQUFYLEVBQWlCLENBQWpCOztBQUVBTixVQUFPTyxLQUFQLENBQWMscUNBQThCRCxJQUE5QixFQUFzQyxDQUF0QyxFQUEwQ0csUUFBMUMsRUFBZCxFQUFxRSxzQkFBUSxDQUFSLEVBQVlBLFFBQVosRUFBckU7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUEsQ0FoREQ7QUFpREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJuZ3JhdmVcIixcblx0XHRcdFwicGF0aFwiOiBcIm5ncmF2ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmdyYXZlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJuZ3JhdmVcIjogXCJuZ3JhdmVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5ncmF2ZSA9IHJlcXVpcmUoIFwiLi9uZ3JhdmUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcIm5ncmF2ZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBuZ3JhdmUoIFN5bWJvbCggJ2hlbGxvJyApLCB7IH0sIDEyMzQ1IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gU3ltYm9sKCAnaGVsbG8nICkgcHJvcGVydHkgd2l0aCB2YWx1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcblxuXHRcdFx0bmdyYXZlKCBzeW1ib2wsIGRhdGEsIDEyMzQ1ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YVsgc3ltYm9sIF0sIDEyMzQ1ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmdyYXZlKCBTeW1ib2wuZm9yKCAnZXh0ZW5zaXZlJyApLCBmdW5jdGlvbiBIZWxsbyggKXsgfSwgU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIFN5bWJvbCggJ2V4dGVuc2l2ZScgKSBwcm9wZXJ0eSB3aXRoIHZhbHVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXHRcdFx0bGV0IGRhdGEgPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblxuXHRcdFx0bmdyYXZlKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIGRhdGEsIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGFbIHN5bWJvbCBdLCBzeW1ib2wgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBuZ3JhdmUoICdzeW1iaW9zaXMnLCBkYXRhLCBzeW1ib2wgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBTeW1ib2woICdzeW1iaW9zaXMnICkgcHJvcGVydHkgd2l0aCB2YWx1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJzeW1iaW9zaXNcIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cblx0XHRcdG5ncmF2ZSggXCJzeW1iaW9zaXNcIiwgZGF0YSwgc3ltYm9sICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggZGF0YSApWyAwIF0udG9TdHJpbmcoICksIHN5bWJvbC50b1N0cmluZyggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5ncmF2ZSggMSwgeyB9LCAxIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gU3ltYm9sKCAxICkgcHJvcGVydHkgd2l0aCB2YWx1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRuZ3JhdmUoIDEsIGRhdGEsIDEgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBkYXRhIClbIDAgXS50b1N0cmluZyggKSwgU3ltYm9sKCAxICkudG9TdHJpbmcoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
