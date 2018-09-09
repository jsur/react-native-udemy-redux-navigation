import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAcsdY5wNsrziALfgKyePRTqj8ZHGOQ0sM',
      authDomain: 'manager-3b7c8.firebaseapp.com',
      databaseURL: 'https://manager-3b7c8.firebaseio.com',
      projectId: 'manager-3b7c8',
      storageBucket: 'manager-3b7c8.appspot.com',
      messagingSenderId: '604551993612'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider
        store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
      >
        <Router />
      </Provider>
    );
  }
}

export default App;
