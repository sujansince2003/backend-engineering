const fs = require("fs");
const a = 10;
setImmediate(() => console.log("set immediate is executed"));
fs.readFile("file.txt", "utf8", () => {
  console.log("reading the file");
});

setTimeout(() => {
  console.log("thi is timeout");
}, 0);
function printA() {
  console.log(a);
}
printA();
console.log("end");
