import * as actions from '../actions/actionTypes';

export default function recordReducer(state = {recordCount: 0}, action){
    switch (action.type) {
      case actions.UPDATE_COUNT_SUCCESS:
        return Object.assign({}, state, {recordCount: action.recordCount});
      default:
        return state;
    }
}
