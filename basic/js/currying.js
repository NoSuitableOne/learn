// add(2)(3) = 5
// add(2, 3, 4) = 9

// function currying (fn) {
//   if (arguments.length === 1) {
//     fn();
//   }
// }

function test(a, b) {
  return a + b;
}

// function add() {
//   const args = Array.prototype.slice.call(arguments);
//   if (args.length > 2) {
//     const _result = arguments.callee(...args.slice(1, args.length));
//     return arguments.callee(args[0], _result);
//   } else if (args.length === 2) {
//     return args[0] + args[1];
//   }
// }

function add(...args) {
  return args.reduce((a, b) => a + b);
}

let result = add(2)(3)(4);
console.log(result);