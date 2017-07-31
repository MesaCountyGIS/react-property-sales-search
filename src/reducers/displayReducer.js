import * as actions from '../actions/actionTypes';

initDisplayState = {
    modalIsOpen: false,
    startMessageIsOpen: true,
    tableIsOpen:false
}

export default function displayReducer(state = initDisplayStates, action){
    switch(action.type){
        case actions.TOGGLE_MODAL:
            return {modalIsOpen: action.modalIsOpen};
        case actions.TOGGLE_START_MESSAGE
            return {startMessageIsOpen: action.startMessageIsOpen}
        case actions.TOGGLE_TABLE
            return {tableIsOpen: action.tableIsOpen}
        default:
            return state;
    }
}
