import {createStore, applyMiddleware, compose} from 'redux';
import rootEpic from './epics';
import reducers from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';

// Firebase
import firebase from '../firebase';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';

const epicMiddleware = createEpicMiddleware({
    dependencies: {getFirebase, getFirestore},
});

const middlewares = [thunk.withExtraArgument({getFirestore, getFirebase}), epicMiddleware];

const store = createStore(reducers, compose(applyMiddleware(...middlewares), reduxFirestore(firebase)));

epicMiddleware.run(rootEpic);

export default store;
