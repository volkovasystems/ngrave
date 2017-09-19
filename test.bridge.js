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
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("ngrave", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ngrave( Symbol( 'hello' ), { }, 12345 )`", function () {

		it("should contain Symbol( 'hello' ) property with value", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( function( ){
   
   				let symbol = Symbol( "hello" );
   				let data = { };
   
   				ngrave( symbol, data, 12345 );
   
   				return data[ symbol ];
   
   			} ).value;
   			//: @end-ignore
			assert.equal(result, 12345);

		});

	});

	describe("`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", function () {
		it("should contain Symbol( 'extensive' ) property with value", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let symbol = Symbol.for( "extensive" );
   					let data = function Hello( ){ };
   
   					let test = ngrave( Symbol.for( "extensive" ), data, Symbol.for( "extensive" ) );
   
   					return test[ symbol ].toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "Symbol(extensive)");

		});
	});

	describe("`ngrave( 'symbiosis', data, symbol )`", function () {
		it("should contain Symbol( 'symbiosis' ) property with value", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let symbol = Symbol( "symbiosis" );
   					let data = { };
   
   					ngrave( "symbiosis", data, symbol );
   
   					return Object.getOwnPropertySymbols( data )[ 0 ].toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "Symbol(symbiosis)");

		});
	});

	describe("`ngrave( 1, { }, 1 )`", function () {
		it("should contain Symbol( 1 ) property with value", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = { };
   					ngrave( 1, data, 1 );
   
   					return Object.getOwnPropertySymbols( data )[ 0 ].toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "Symbol(1)");

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7OztBQU1BOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsMkNBQVYsRUFBdUQsWUFBTzs7QUFFN0RJLEtBQUksc0RBQUosRUFBNEQsWUFBTztBQUNsRTtBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsR0FqQkQ7O0FBbUJBLEVBckJEOztBQXVCQU4sVUFBVSx3RkFBVixFQUFvRyxZQUFPO0FBQzFHSSxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsbUJBQXRCOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQU4sVUFBVSx1Q0FBVixFQUFtRCxZQUFPO0FBQ3pESSxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsbUJBQXRCOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQU4sVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLGdEQUFKLEVBQXNELFlBQU87QUFDNUQ7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFdBQXRCOztBQUVBLEdBakJEO0FBa0JBLEVBbkJEOztBQXFCQSxDQTlGRDs7QUFnR0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5ncmF2ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibmdyYXZlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9uZ3JhdmUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcIm5ncmF2ZVwiOiBcIm5ncmF2ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcIm5ncmF2ZVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgbmdyYXZlKCBTeW1ib2woICdoZWxsbycgKSwgeyB9LCAxMjM0NSApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gU3ltYm9sKCAnaGVsbG8nICkgcHJvcGVydHkgd2l0aCB2YWx1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCBmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcblx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cblx0XHRcdFx0bmdyYXZlKCBzeW1ib2wsIGRhdGEsIDEyMzQ1ICk7XG5cblx0XHRcdFx0cmV0dXJuIGRhdGFbIHN5bWJvbCBdO1xuXG5cdFx0XHR9ICkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMTIzNDUgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5ncmF2ZSggU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKSwgZnVuY3Rpb24gSGVsbG8oICl7IH0sIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBTeW1ib2woICdleHRlbnNpdmUnICkgcHJvcGVydHkgd2l0aCB2YWx1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gbmdyYXZlKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIGRhdGEsIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3RbIHN5bWJvbCBdLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woZXh0ZW5zaXZlKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmdyYXZlKCAnc3ltYmlvc2lzJywgZGF0YSwgc3ltYm9sIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gU3ltYm9sKCAnc3ltYmlvc2lzJyApIHByb3BlcnR5IHdpdGggdmFsdWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcInN5bWJpb3Npc1wiICk7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cblx0XHRcdFx0XHRuZ3JhdmUoIFwic3ltYmlvc2lzXCIsIGRhdGEsIHN5bWJvbCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIGRhdGEgKVsgMCBdLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woc3ltYmlvc2lzKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmdyYXZlKCAxLCB7IH0sIDEgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgY29udGFpbiBTeW1ib2woIDEgKSBwcm9wZXJ0eSB3aXRoIHZhbHVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRcdFx0bmdyYXZlKCAxLCBkYXRhLCAxICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggZGF0YSApWyAwIF0udG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIlN5bWJvbCgxKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
