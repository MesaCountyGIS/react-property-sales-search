import * as actions from '../actions/actionTypes';

export default function displayReducer(state = {modalIsOpen: false}, action){
    switch(action.type){
        case actions.TOGGLE_MODAL:
            return {modalIsOpen: action.modalIsOpen};
        default:
            return state;
    }
}
