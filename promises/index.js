// const promise = new Promise((x, y) => {
//   let a = 3 + "fd";
//   console.log(typeof a);
//   if (typeof a == "number") {
//     y("was number");
//   } else {
//     x("was not number");
//   }
// });

// promise.then((val) => console.log(val)).catch((val) => console.log(val));

function Process() {
  let count = 1;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const fn = Process();
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
