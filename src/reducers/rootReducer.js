import {combineReducers} from 'redux';
import modalDisplay from './displayReducer';
import facets from './facetsReducer';
import records from './recordReducer';

const rootReducer = combineReducers({
    modalDisplay,
    records,
    facets
});

export default rootReducer;
