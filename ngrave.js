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
			"package": "ngrave ",
			"path": "ngrave /ngrave .js",
			"file": "ngrave .js",
			"module": "ngrave ",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ngrave .git",
			"test": "ngrave -test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Push symbol property value.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"mtch": "mtch",
			"protype": "protype"
		}
	@end-include
*/

const falzy = require( "falzy" );
const mtch = require( "mtch" );
const protype = require( "protype" );

const SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

const ngrave  = function ngrave( symbol, entity, value ){
	/*;
		@meta-configuration:
			{
				"symbol:required": "symbol",
				"entity:required": [
					"function",
					"object"
				]
			}
		@end-meta-configuration
	*/

	if( falzy( symbol ) || !protype( symbol, SYMBOL ) ){
		throw new Error( "invalid symbol" );
	}

	if( falzy( entity ) || !protype( entity, FUNCTION + OBJECT ) ){
		throw new Error( "invalid entity" );
	}

	let string = mtch( symbol.toString( ), SYMBOL_PATTERN, 1 );

	symbol = Object.getOwnPropertySymbols( entity ).reduce( ( symbol, property ) => {
		if( mtch( property.toString( ), SYMBOL_PATTERN, 1 ) == string ){
			return property;
		}

		return symbol;
	}, symbol );

	try{
		entity[ symbol ] = value;

	}catch( error ){ }

	return entity;
};

module.exports = ngrave ;
