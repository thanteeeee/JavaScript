const start = Date.now();

console.log('starting timer...');

setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`second elased = ${Math.floor(millis / 1000)}`);

},2000);