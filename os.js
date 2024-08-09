const os = require('os');

console.log('--- System Information ---');
console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Release:', os.release());
console.log('Uptime:', os.uptime(), 'seconds');
console.log('Load Average:', os.loadavg()); // Only on Unix systems
console.log('Endianness:', os.endianness());

console.log('\n--- Memory Information ---');
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');

console.log('\n--- CPU Information ---');
console.log('CPU Info:', os.cpus());
console.log('Number of CPUs:', os.cpus().length);

console.log('\n--- Network Information ---');
console.log('Network Interfaces:', os.networkInterfaces());

console.log('\n--- User Information ---');
console.log('User Info:', os.userInfo());


// Explanation
// os.type(): Returns the operating system name.
// os.platform(): Returns the operating system platform.
// os.arch(): Returns the CPU architecture.
// os.hostname(): Returns the hostname of the operating system.
// os.release(): Returns the operating system release.
// os.uptime(): Returns the system uptime in seconds.
// os.loadavg(): Returns the load averages (only on Unix systems).
// os.endianness(): Returns the endianness of the CPU.
// os.totalmem(): Returns the total system memory in bytes.
// os.freemem(): Returns the free system memory in bytes.
// os.cpus(): Returns an array of objects containing information about each CPU/core.
// os.networkInterfaces(): Returns network interfaces.
// os.userInfo(): Returns information about the current user.