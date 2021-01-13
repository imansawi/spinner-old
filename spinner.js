//THIS CODE SPINS A CHARACTER

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 400);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r\   ');
}, 1000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   \n'); 
}, 1300);