const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    process.stdout.write(input[0])
    process.stdout.write(input[0]%2 == 0 ? ' is even' : ' is odd')
});