function promiseCancelableWrapper (p) {
  let canceled = false;
  let newPromise = new Promise(( resolve, reject ) => {
    p
      .then(value => {
      if (canceled) {
        reject('promise is canceled');
      } else {
        resolve(value);
      }
    })
      .catch(error => {
      if (canceled) {
        reject('promise is canceled');
      } else {
        reject(error);
      }
    });
  });
  return {
    promise: newPromise,
    cancel: () => {
      canceled = true;    
    }
  };
};
let eg = new Promise(( resolve, reject ) => {
  let number = Math.random();
  if (number > 0.5) {
    resolve(number);
  } else {
    reject(number);
  }
});

let canceledP = promiseCancelableWrapper(eg);
canceledP.cancel();

console.log(
  canceledP.promise
    .then(v => console.log('then: ', v))
    .catch(err => console.error('error:', err))
);
