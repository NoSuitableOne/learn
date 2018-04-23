function execTime(t) {
  const start = Date.now();
  while (true) {
    if ( Date.now() - start >= t) {
      return;
    }
  }
}

console.log(1);
execTime(3000);
console.log(2);