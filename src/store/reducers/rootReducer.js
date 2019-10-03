import authReducer from './authReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  firestore: firestoreReducer
});

export default rootReducer;
