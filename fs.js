const fs = require('fs');
const path = require('path');

// Example directory and file paths
const exampleDir = path.join(__dirname, 'exampleDir');
const exampleFile = path.join(exampleDir, 'exampleFile.txt');

// Ensure exampleDir exists
// if (!fs.existsSync(exampleDir)) {
//     fs.mkdirSync(exampleDir);
// }

// // 1. Reading Files
// // Asynchronous
// fs.readFile(exampleFile, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file asynchronously:', err);
//     } else {
//         console.log('File content (async):', data);
//     }
// });

// // Synchronous
// try {
//     const data = fs.readFileSync(exampleFile, 'utf8');
//     console.log('File content (sync):', data);
// } catch (err) {
//     console.error('Error reading file synchronously:', err);
// }

// // 2. Writing Files
// // Asynchronous
// fs.writeFile(exampleFile, 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing file asynchronously:', err);
//     } else {
//         console.log('File written successfully (async)');
//     }
// });

// // Synchronous
// try {
//     fs.writeFileSync(exampleFile, 'Hello, Synchronous World!');
//     console.log('File written successfully (sync)');
// } catch (err) {
//     console.error('Error writing file synchronously:', err);
// }

// // 3. Appending to Files
// // Asynchronous
// fs.appendFile(exampleFile, '\nAppended content!', (err) => {
//     if (err) {
//         console.error('Error appending file asynchronously:', err);
//     } else {
//         console.log('File appended successfully (async)');
//     }
// });

// // Synchronous
// try {
//     fs.appendFileSync(exampleFile, '\nAppended content synchronously!');
//     console.log('File appended successfully (sync)');
// } catch (err) {
//     console.error('Error appending file synchronously:', err);
// }

// // 4. Deleting Files
// // Asynchronous
// fs.unlink(exampleFile, (err) => {
//     if (err) {
//         console.error('Error deleting file asynchronously:', err);
//     } else {
//         console.log('File deleted successfully (async)');
//     }
// });

// // Synchronous
// try {
//     fs.unlinkSync(exampleFile);
//     console.log('File deleted successfully (sync)');
// } catch (err) {
//     console.error('Error deleting file synchronously:', err);
// }

// 5. Renaming Files
// Create a file to rename
// fs.writeFileSync(exampleFile, 'File to rename');

// // Asynchronous
// fs.rename(exampleFile, path.join(exampleDir, 'myFile.txt'), (err) => {
//     if (err) {
//         console.error('Error renaming file asynchronously:', err);
//     } else {
//         console.log('File renamed successfully (async)');
//     }
// });

// Synchronous
// try {
//     fs.renameSync(exampleFile,path.join(exampleDir, 'renamedFile.txt'));
//     console.log('File renamed successfully (sync)');
// } catch (err) {
//     console.error('Error renaming file synchronously:', err);
// }

// 6. Watching Files and Directories
// fs.watch(exampleDir, (eventType, filename) => {
//     console.log(`Event type: ${eventType}`);
//     console.log(`Filename: ${filename}`);
// });

// 7. Creating and Removing Directories
// Create Directory
// const newDir = path.join(exampleDir, 'newDir');

// Asynchronous
// fs.mkdir(newDir, (err) => {
//     if (err) {
//         console.error('Error creating directory asynchronously:', err);
//     } else {
//         console.log('Directory created successfully (async)');
//     }
// });

// // Synchronous
// try {
//     fs.mkdirSync(newDir);
//     console.log('Directory created successfully (sync)');
// } catch (err) {
//     console.error('Error creating directory synchronously:', err);
// }

// Remove Directory
// Asynchronous
// fs.rmdir(newDir, (err) => {
//     if (err) {
//         console.error('Error removing directory asynchronously:', err);
//     } else {
//         console.log('Directory removed successfully (async)');
//     }
// });

// // Synchronous
// try {
//     fs.rmdirSync(newDir);
//     console.log('Directory removed successfully (sync)');
// } catch (err) {
//     console.error('Error removing directory synchronously:', err);
// }

// // 8. Reading and Writing File Metadata
// // Create a file to set metadata
// fs.writeFileSync(exampleFile, 'File to set metadata');

// Asynchronous
fs.stat(exampleFile, (err, stats) => {
    if (err) {
        console.error('Error getting file stats asynchronously:', err);
    } else {
        console.log('File stats (async):', JSON.stringify(stats));
    }
});

// // Synchronous
// try {
//     const stats = fs.statSync(exampleFile);
//     console.log('File stats (sync):', stats);
// } catch (err) {
//     console.error('Error getting file stats synchronously:', err);
// }
