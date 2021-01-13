//process.stdout.write('\rhello from spinner1.js...heyyy\n');

const spinArray = ["|", "/", "-", "\\", "\n"];
let timer = 100;
for (let char of spinArray) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, timer);
  timer += 300;
}
process.stdout.write('\r   \n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 400);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 1000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   \n'); 
// }, 1300);
