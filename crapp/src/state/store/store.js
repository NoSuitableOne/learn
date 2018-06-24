import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleWare from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { infoSaga } from '../sagas/info';
import reducer from '../reducers/all';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(
        // thunkMiddleWare
        sagaMiddleware
    )
);
sagaMiddleware.run(infoSaga);

export default store;
