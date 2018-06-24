function execTime(t, callback) {
  setTimeout(callback, t);
}

console.log(1);
execTime(3000, function() {
  console.log(3);
});
console.log(2);
