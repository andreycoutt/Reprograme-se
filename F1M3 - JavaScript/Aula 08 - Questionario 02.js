a = 10;
b = 20;
c = 30;
d = 40;

if ((a <= b) && !(c >= d)) {
  if (a > d) {
    console.log("Instrução 1");
  } else {
    console.log("Instrução 2");
  }
} else {
  if ((b == a) && (c === d)) {
    console.log("Instrução 3");
  } else {
    console.log("Instrução 4");
  }
}