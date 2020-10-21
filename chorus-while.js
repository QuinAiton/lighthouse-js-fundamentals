const chorus = "Let's sing!";
let repeat = 1;
while (repeat < 9) {
  if (repeat === 4) {
    console.log("*changekey*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
