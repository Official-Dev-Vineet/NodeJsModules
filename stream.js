// streams are an essential concept for handling data that is read from or written to a source in a continuous manner. Streams provide an efficient way to work with large data sets by processing data in chunks rather than loading the entire dataset into memory at once. This makes streams particularly useful for tasks such as file I/O, network communication, and handling large datasets.

// Types of Streams
// There are four main types of streams in Node.js:

// Readable Streams: Used for reading data from a source.
// Writable Streams: Used for writing data to a destination.
// Duplex Streams: Implement both readable and writable streams.
// Transform Streams: A type of duplex stream where the output is computed based on input.
// Stream Basics
// Streams are instances of EventEmitter and they can emit several events. Here are some common events:

// data: Emitted when data is available to read.
// end: Emitted when there is no more data to read.
// error: Emitted when an error occurs.
// finish: Emitted when all data has been flushed to the underlying system (for writable streams).

// 1. Readable Streams
// Readable streams are used to read data from a source. Examples include reading files or receiving data over a network.

const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('No more data.');
});

readableStream.on('error', (err) => {
    console.error('Error:', err);
});

// 2. Writable Streams
// Writable streams are used to write data to a destination. Examples include writing to a file or sending data over a network.

const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end();

writableStream.on('finish', () => {
    console.log('All data written.');
});

writableStream.on('error', (err) => {
    console.error('Error:', err);
});

// 3. Duplex Streams : Duplex streams are both readable and writable. Examples include TCP sockets.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        console.log('Received data:', data.toString());
        socket.write(`You said: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });

    socket.on('error', (err) => {
        console.error('Error:', err);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000.');
});

// 4.Transform Streams : Transform streams are duplex streams where the output is computed based on input. Examples include compression and encryption.

const { Transform } = require('stream');

class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const transformStream = new UppercaseTransform();

process.stdin.pipe(transformStream).pipe(process.stdout);

transformStream.on('error', (err) => { console.error("Error", err); });

// 5. Pipe Method :The pipe method is a convenient way to connect multiple streams together. It is often used to read data from a readable stream and write it to a writable stream.

const fs = require('fs');

const readableStream1 = fs.createReadStream('input.txt');
const writableStream1 = fs.createWriteStream('output.txt');

readableStream1.pipe(writableStream1);

writableStream.on('finish', () => {
  console.log('All data piped and written.');
});

// High-Level Streams API : Node.js also provides a higher-level API for working with streams, such as the stream.pipeline and stream.finished utility functions.

const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
