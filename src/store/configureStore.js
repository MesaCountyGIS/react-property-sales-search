import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
    );
}
