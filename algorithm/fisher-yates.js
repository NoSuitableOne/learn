let a = [1,2,3,4,5,6,7,8];
let b = [];
let c = [];

while(a.length > 0) {
  let i = Math.floor(Math.random() * a.length);
  let temp = a[a.length - 1];
  a[a.length - 1] = a[i];
  a[i] = temp;
  c.push(a.pop()); 
}

// math random
while (a.length > 0) {
  let i = Math.floor(Math.random() * a.length);
  b.push(a[i]);
  a.splice(i, 1);
}
