const url = require('url');


// The url module in Node.js provides utilities for URL resolution and parsing. Here's a comprehensive overview of the url module, including its methods and advanced usage examples, all in one file with explanations.

// Features and Methods
// The url module has several useful methods and properties for working with URLs:

// Parsing URLs: url.parse()
// Formatting URLs: url.format()
// URL Resolution: url.resolve()
// URL Class: URL and URLSearchParams

// Example URL
const exampleUrl = 'https://user:pass@sub.example.com:8080/product/shirt/redShirt?query=string#hash';

// Parsing URLs
const parsedUrl = url.parse(exampleUrl);
// console.log('Parsed URL:', JSON.stringify(parsedUrl));

// Formatting URLs
// const formattedUrl = url.format(parsedUrl);
// console.log('Formatted URL:', formattedUrl);

// URL Resolution
// const baseUrl = 'https://example.com';
// const relativeUrl = '/foo/bar';
// const resolvedUrl = url.resolve(baseUrl, relativeUrl);
// console.log('Resolved URL:', resolvedUrl);

// // Using the URL Class
const myURL = new URL(exampleUrl);
// console.log('Using URL class:', myURL);

// // Accessing URL components
// console.log('Protocol:', myURL.protocol);
// console.log('Username:', myURL.username);
// console.log('Password:', myURL.password);
// console.log('Hostname:', myURL.hostname);
// console.log('Port:', myURL.port);
// console.log('Pathname:', myURL.pathname);
// console.log('Search:', myURL.search);
// console.log('Hash:', myURL.hash);
// console.log("origin:",myURL.origin)


// // Manipulating URLSearchParams
myURL.searchParams.append('newParam', 'newValue');
myURL.searchParams.append('product', 'bra');
// console.log('Updated URL with new query param:', myURL.href);

// check search Params is available or not
const isProduct = myURL.searchParams.has("product");
// console.log(isProduct);

// delete search Params
myURL.searchParams.delete('newParam');
// console.log('Updated URL with deleted query param:', myURL.href);

// /product/shirt/redShirt
const urlArray = myURL.pathname.split("/")
// console.log(urlArray);

const isSecureProtocol = myURL.protocol.toLowerCase() === "https:";
// console.log("Is secured :", isSecureProtocol);
// // Loop through URLSearchParams
// console.log('Query parameters:');
// myURL.searchParams.forEach((value, name) => {
//   console.log(`${name}: ${value}`);
// });

// get value from searchParams by name
const searchValue= myURL.searchParams.get("product");
console.log(searchValue);
