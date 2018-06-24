import { call, put, takeEvery } from 'redux-saga/effects';
import requestServerInfo from '../../services/info'


function* getServerInfo() {
    try {
        yield put({ type: 'GET SERVER INFO' });
        const { data: { server: server } } = yield call(requestServerInfo, 'http://server/test');
        yield put({ type: 'RECEIVE SERVER INFO', payload: { server } });
    } catch (e) {
        yield put({ type: 'RECEIVE AN ERROR' });
    }
}

function* infoSaga() {
    yield* takeEvery('QUERY_INFO', getServerInfo);
}

export { infoSaga };
