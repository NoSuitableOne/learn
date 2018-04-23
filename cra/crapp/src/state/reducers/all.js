import { combineReducers } from 'redux';
import ui from './ui';
import info from './info';

const reducer = combineReducers({
    info,
    ui
});

export default reducer;
