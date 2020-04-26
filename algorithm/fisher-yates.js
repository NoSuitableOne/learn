let a = [1,2,3,4,5,6,7,8];
let b = [];

// fisher-yates
let j = a.length - 1;
while(j > 0) {
  let k = Math.floor(Math.random() * (j + 1));
  let temp = a[j];
  a[j] = a[k];
  a[k] = temp;
  j--; 
}

// math random
while (a.length > 0) {
  let i = Math.floor(Math.random() * a.length);
  b.push(a[i]);
  a.splice(i, 1);
}
