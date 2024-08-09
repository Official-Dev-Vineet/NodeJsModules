// Buffer is not a data type in the traditional sense like strings, numbers, or arrays. Instead, Buffer is a global object that provides a way to handle binary data directly in memory. It's a built-in class that acts as a special type of object for handling raw binary data.

// Understanding Buffer in Context
// Not a Primitive Data Type: JavaScript has several primitive data types like string, number, boolean, undefined, null, symbol, and bigint. Buffer is not one of these.
// Special Object: Buffer is a global object available in Node.js, which means you don't need to require it to use it. It provides a way to work with binary data directly, which is particularly useful for dealing with file I/O, network communications, and other low-level operations.
// Why Buffer is Important
// Binary Data Handling: JavaScript strings are encoded in UTF-16, which makes them inefficient for binary data manipulation. Buffer allows you to handle binary data efficiently.
// Performance: Buffer is designed for high performance when working with binary data, which is essential for building network applications and handling streams in Node.js.
// Example Use Cases
// File I/O: Reading and writing binary files.
// Networking: Sending and receiving binary data over the network.
// Data Parsing: Parsing binary data formats.

const fs = require('fs');

// Create a buffer from a string
const bufferFromString = Buffer.from('Hello, World!');
console.log('Buffer from string:', bufferFromString);
console.log('Buffer from string toString:', bufferFromString.toString());

// Create a buffer from an array
const bufferFromArray = Buffer.from([1, 2, 3, 4, 5]);
console.log('Buffer from array:', bufferFromArray);

// Create a buffer with a specific size, initialized with zeros
const bufferAlloc = Buffer.alloc(10);
console.log('Buffer alloc (10 bytes):', bufferAlloc);

// Create a buffer with a specific size, without initializing the memory
const bufferAllocUnsafe = Buffer.allocUnsafe(10);
console.log('Buffer allocUnsafe (10 bytes):', bufferAllocUnsafe);

// Write a string to a buffer
const bufferWrite = Buffer.alloc(15);
bufferWrite.write('Hello, Buffer!');
console.log('Buffer write:', bufferWrite);
console.log('Buffer write toString:', bufferWrite.toString());

// Decode the buffer to a string
const bufferToString = Buffer.from('Hello, World!');
console.log('Buffer toString:', bufferToString.toString('utf8'));

// Create a slice of the buffer
const bufferSlice = bufferFromString.slice(0, 5);
console.log('Buffer slice (first 5 bytes):', bufferSlice);
console.log('Buffer slice toString:', bufferSlice.toString());

// Copy data from one buffer to another
const bufferSource = Buffer.from('Hello, World!');
const bufferTarget = Buffer.alloc(5);
bufferSource.copy(bufferTarget, 0, 0, 5);
console.log('Buffer source:', bufferSource);
console.log('Buffer target (after copy):', bufferTarget);
console.log('Buffer target toString:', bufferTarget.toString());

// Write the buffer data to a file
fs.writeFileSync('buffer-data.txt', bufferFromString);

// Read the buffer data from a file
const bufferFromFile = fs.readFileSync('buffer-data.txt');
console.log('Buffer from file:', bufferFromFile);
console.log('Buffer from file toString:', bufferFromFile.toString());

// Explanation
// Buffer from String: Creates a buffer from a string and logs the buffer and its string representation.
// Buffer from Array: Creates a buffer from an array of bytes and logs the buffer.
// Buffer Alloc: Creates a buffer of a specified size (10 bytes) initialized with zeros and logs the buffer.
// Buffer AllocUnsafe: Creates a buffer of a specified size (10 bytes) without initializing the memory and logs the buffer. Note: The contents of this buffer may be random.
// Buffer Write: Writes a string to a buffer and logs the buffer and its string representation.
// Buffer toString: Decodes the buffer to a string and logs the result.
// Buffer Slice: Creates a new buffer that references the first 5 bytes of the original buffer and logs the buffer and its string representation.
// Buffer Copy: Copies data from one buffer to another and logs both buffers and the string representation of the target buffer.
// File Operations: Writes the buffer data to a file (buffer-data.txt) and then reads the buffer data from the file, logging both the buffer and its string representation.