console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.toString()}`);

    process.exit();
  });
} else {
  process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.toString()}`);

    process.exit();
  });

  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
