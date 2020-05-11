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

class Plan {
  constructor(queue, ctx) {
    this.queue = queue || [];
    this.ctx = ctx || {};
  }

  before (task) {
    this.queue.unshift(task);
  }

  after (task) {
    this.queue.push(task);
  }

  eachCall = (lastPromise, next) => {
    return lastPromise.then(value => {
      this.ctx = {
        ...this.ctx,
        ...value
      };
      if (next.FIN) {
        return this.ctx; 
      } else {
        return next.fn(this.ctx, ...next.params);
      }
    }).catch(error => {
      console.error('error:', error);
    });
  }

  execute () {
    this.queue.push(Promise.resolve({ FIN: true }));
    return this.queue.reduce(
      (lastPromise, task) => this.eachCall(lastPromise, task), 
      Promise.resolve()
    );
  }
}

let number = Math.random();

function eg (ctx, number, therehold = 0.5, name, time = 2) {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      if (number > therehold) {
        resolve({ [name]: number });
      } else {
        reject(number);
      }
    }, time * 1000);
  });
}
/* cancel promise */
// let canceledP = promiseCancelableWrapper(eg(number, 0.2));
// canceledP.cancel();

/* async tasks */
let planA = new Plan([
  {
    fn: eg,
    params: [number, 0, 'eg1', 1]
  }, 
  {
    fn: eg,
    params: [number, 0, 'eg2']
  },
  {
    fn: eg,
    params: [number, 0, 'eg3', 3]
  },
  {
    fn: eg,
    params: [number, 0, 'eg4', 2]
  }
]);
planA.execute().then(() => console.log(planA.ctx));
