import * as actions from '../actions/actionTypes';

const recordState = {
    recordCount:[],
    recordData: {}
}

export default function recordReducer(state = recordState, action){
    switch (action.type) {
      case actions.UPDATE_COUNT_SUCCESS:
        return Object.assign({}, state, {recordCount: action.recordCount});
    case actions.UPDATE_RECORDS_SUCCESS:
      return Object.assign({}, state, {recordData: action.recordData});
      default:
        return state;
    }
}
