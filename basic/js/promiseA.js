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
  constructor(queue, state) {
    this.queue = queue || [];
    this.state = state || {};
  }

  before (task) {
    this.queue.unshift(task);
  }

  after (task) {
    this.queue.push(task);
  }

  setState = (value) => {
    this.state = {
      ...this.state,
      ...value
    };
  }

  getState = () => {
    return this.state;
  };

  eachCall = (lastPromise, next) => {
    lastPromise
    .then(value => {
      this.setState(value);
    })
    .catch(error => {
      console.error('error:', error);
    });
    return next.fn(...next.params);
  }

  execute () {
    return this.queue.reduce(
      (lastPromise, ele) => this.eachCall(lastPromise, ele), 
      new Promise(resolve => resolve())
    );
  }
}

let number = Math.random();

function eg (number, therehold = 0.5, name, time = 2) {
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
    params: [ number, 0, 'eg1', 10 ]
  }, 
  {
    fn: eg,
    params: [ number, 0, 'eg2' ]  
  },
  {
    fn: eg,
    params: [ number, 0, 'eg3' ]
  },
  {
    fn: eg,
    params: [ number, 0, 'eg4' ]
  }
]);
planA.execute().then(()=>{
  console.log(planA.getState());
});
