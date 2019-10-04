import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import { Provider } from 'react-redux';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { fbConfig } from './config/fbConfig';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase: fbConfig,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance: createFirestoreInstance
};

const Test = () => {
  return <div> Fucking Works</div>;
};

const rootElement = document.getElementById('root');

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Test />
    </ReactReduxFirebaseProvider>
  </Provider>,
  rootElement
);
