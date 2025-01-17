//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  
  if (cmd === 'pwd') {
      console.log(__filename);
  } else {
      process.stdout.write('You typed: ' + cmd);
  }

  
  process.stdout.write('\nprompt > ');
});

function pwd(str) {
    if (str === 'pwd'){
        return __filename;
    }
}