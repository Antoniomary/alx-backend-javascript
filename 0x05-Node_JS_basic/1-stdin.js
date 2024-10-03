console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = String(input).trim();

  console.log(`Your name is: ${name}`);

  if (process.stdout.isTTY && !process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  process.exit();
});
