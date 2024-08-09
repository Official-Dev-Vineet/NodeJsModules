const util = require('util');



// The util module in Node.js provides various utility functions that are helpful for debugging, handling asynchronous operations, and other tasks. Here's a comprehensive guide that covers the main features and functionalities of the util module, complete with examples.

// Features of the util Module
// Callbackify: Converts an async function to a function following the callback style.
// Debuglog: A method for creating debugging functions.
// Deprecate: Marks a function as deprecated.
// Format: A string formatting method.
// Inherits: Inheritance utility for setting up prototype chains.
// Inspect: A customizable inspect method for objects.
// Promisify: Converts a callback-based function to a Promise-based one.
// TextDecoder and TextEncoder: For handling text encoding and decoding.
// Types: Various type-checking functions.

// Example: callbackify
async function asyncFunction() {
    return 'Hello, World!';
}
const callbackifiedFunction = util.callbackify(asyncFunction);
callbackifiedFunction((err, ret) => {
    if (err) throw err;
    console.log('Callbackified Function:', ret);
});

// Example: debuglog
const debuglog = util.debuglog('foo');
debuglog('Hello from foo [%d]', 123);

// Example: deprecate
const deprecatedFunction = util.deprecate(() => {
    console.log('This function is deprecated');
}, 'deprecatedFunction() is deprecated');
deprecatedFunction();

// Example: format
const formattedString = util.format('Hello, %s!', 'World');
console.log('Formatted String:', formattedString);

// Example: inherits
const EventEmitter = require('events');
function MyClass() {}
util.inherits(MyClass, EventEmitter);

const myInstance = new MyClass();
myInstance.on('event', () => {
    console.log('An event occurred!');
});
myInstance.emit('event');

// Example: inspect
const obj = { a: 1, b: [1, 2, 3], c: { d: 4 } };
console.log('Inspect Object:', util.inspect(obj, { colors: true, depth: null }));

// Example: promisify
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile(__filename, 'utf8')
    .then(data => {
        console.log('File Content:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

// Example: TextDecoder and TextEncoder
const encoder = new util.TextEncoder();
const decoder = new util.TextDecoder('utf-8');

const encoded = encoder.encode('Hello, World!');
console.log('Encoded Text:', encoded);

const decoded = decoder.decode(encoded);
console.log('Decoded Text:', decoded);

// Example: types
console.log('Is Date:', util.types.isDate(new Date()));
console.log('Is RegExp:', util.types.isRegExp(/abc/));
console.log('Is Set:', util.types.isSet(new Set()));
