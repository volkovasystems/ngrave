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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var ngrave = require("./ngrave.support.js");
//: @end-client





//: @client:

describe("ngrave", function () {

	describe("`ngrave( Symbol( 'hello' ), { }, 12345 )`", function () {
		it("should push symbol property value", function () {
			var symbol = (0, _symbol2.default)("hello");
			var data = {};

			ngrave(symbol, data, 12345);

			assert.equal(data[symbol], 12345);

		});
	});

	describe("`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", function () {
		it("should push symbol property value", function () {
			var symbol = (0, _for2.default)("extensive");
			var data = function Hello() {};

			ngrave((0, _for2.default)("extensive"), data, (0, _for2.default)("extensive"));

			assert.equal(data[symbol], (0, _for2.default)("extensive"));

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibmdyYXZlIiwiZGVzY3JpYmUiLCJpdCIsInN5bWJvbCIsImRhdGEiLCJlcXVhbCIsIkhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLDJDQUFWLEVBQXVELFlBQU87QUFDN0RDLEtBQUksbUNBQUosRUFBeUMsWUFBTztBQUMvQyxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBLE9BQUlDLE9BQU8sRUFBWDs7QUFFQUosVUFBUUcsTUFBUixFQUFnQkMsSUFBaEIsRUFBc0IsS0FBdEI7O0FBRUFOLFVBQU9PLEtBQVAsQ0FBY0QsS0FBTUQsTUFBTixDQUFkLEVBQThCLEtBQTlCOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBRixVQUFVLHdGQUFWLEVBQW9HLFlBQU87QUFDMUdDLEtBQUksbUNBQUosRUFBeUMsWUFBTztBQUMvQyxPQUFJQyxTQUFTLG1CQUFZLFdBQVosQ0FBYjtBQUNBLE9BQUlDLE9BQU8sU0FBU0UsS0FBVCxHQUFpQixDQUFHLENBQS9COztBQUVBTixVQUFRLG1CQUFZLFdBQVosQ0FBUixFQUFtQ0ksSUFBbkMsRUFBeUMsbUJBQVksV0FBWixDQUF6Qzs7QUFFQU4sVUFBT08sS0FBUCxDQUFjRCxLQUFNRCxNQUFOLENBQWQsRUFBOEIsbUJBQVksV0FBWixDQUE5Qjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQSxDQTFCRDs7QUE0QkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJuZ3JhdmVcIixcblx0XHRcdFwicGF0aFwiOiBcIm5ncmF2ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmdyYXZlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJuZ3JhdmVcIjogXCJuZ3JhdmVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5ncmF2ZSA9IHJlcXVpcmUoIFwiLi9uZ3JhdmUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwibmdyYXZlXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG5ncmF2ZSggU3ltYm9sKCAnaGVsbG8nICksIHsgfSwgMTIzNDUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcHVzaCBzeW1ib2wgcHJvcGVydHkgdmFsdWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cblx0XHRcdG5ncmF2ZSggc3ltYm9sLCBkYXRhLCAxMjM0NSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGFbIHN5bWJvbCBdLCAxMjM0NSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5ncmF2ZSggU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKSwgZnVuY3Rpb24gSGVsbG8oICl7IH0sIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcHVzaCBzeW1ib2wgcHJvcGVydHkgdmFsdWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cdFx0XHRsZXQgZGF0YSA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXG5cdFx0XHRuZ3JhdmUoIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSwgZGF0YSwgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YVsgc3ltYm9sIF0sIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
