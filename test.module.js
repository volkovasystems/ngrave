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

const assert = require( "should/as-function" );

//: @server:
const ngrave = require( "./ngrave.js" );
//: @end-server

//: @client:
const ngrave = require( "./ngrave.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "ngrave", ( ) => {

	describe( "`ngrave( Symbol( 'hello' ), { }, 12345 )`", ( ) => {
		it( "should push symbol property value", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };

			ngrave( symbol, data, 12345 );

			assert.equal( data[ symbol ], 12345 );

		} );
	} );

	describe( "`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", ( ) => {
		it( "should push symbol property value", ( ) => {
			let symbol = Symbol.for( "extensive" );
			let data = function Hello( ){ };

			ngrave( Symbol.for( "extensive" ), data, Symbol.for( "extensive" ) );

			assert.equal( data[ symbol ], Symbol.for( "extensive" ) );

		} );
	} );

} );

//: @end-server

//: @client:

describe( "ngrave", ( ) => {

	describe( "`ngrave( Symbol( 'hello' ), { }, 12345 )`", ( ) => {
		it( "should push symbol property value", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };

			ngrave( symbol, data, 12345 );

			assert.equal( data[ symbol ], 12345 );

		} );
	} );

	describe( "`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", ( ) => {
		it( "should push symbol property value", ( ) => {
			let symbol = Symbol.for( "extensive" );
			let data = function Hello( ){ };

			ngrave( Symbol.for( "extensive" ), data, Symbol.for( "extensive" ) );

			assert.equal( data[ symbol ], Symbol.for( "extensive" ) );

		} );
	} );

} );

//: @end-client

//: @bridge:

describe( "ngrave", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`ngrave with symbol,entity and value parameter`", ( ) => {

		it( "should be equal to 12345", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute( function( ){

				let symbol = Symbol( "hello" );
				let data = { };

				ngrave( symbol, data, 12345 );

				return data[ symbol ];

			} ).value;
			//: @end-ignore
			assert.equal( result, 12345 );

		} );

	} );

	describe( "`ngrave( Symbol.for( 'extensive' ), function Hello( ){ }, Symbol.for( 'extensive' ) )`", ( ) => {
		it( "should push symbol property value", ( ) => {
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
			assert.equal( result, "Symbol(extensive)" );

		} );
	} );

} );

//: @end-bridge
