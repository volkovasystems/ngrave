
const assert = require( "assert" );
const ngrave = require( "./ngrave.js" );

let symbol = Symbol( "hello" );
let data = { };

ngrave( symbol, data, 12345 );

assert.equal( data[ symbol ], 12345, "should be equal" );

console.log( "ok" );
