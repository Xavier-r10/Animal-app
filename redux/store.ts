import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import animalReducer from './animal.reducer';

const rootReducer = combineReducers({
  animals: animalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;