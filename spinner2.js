//THIS IS A REFACTORING CODE FOR SPINNER.JS CODE

const spinArray = ["|", "/", "-", "\\", "\n"];
let timer = 100;
for (let char of spinArray) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, timer);
  timer += 300;
}
process.stdout.write('\r   \n');