import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../rootReducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export const configureStore = () => {
    
    const middleware = []
    const store = createStore(
      rootReducers,
      composeWithDevTools(
        applyMiddleware(...middleware)
    ))

    return store;
}

