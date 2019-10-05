import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import { Provider } from 'react-redux';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfConfig = { userProfile: 'users' };

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const Test = () => <div> Works</div>;

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Test />
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement
);
