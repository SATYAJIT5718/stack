import React from 'react';
import {WishMessage} from './components/Wishmessage'
import './App.css';
import store from './components/store'
import { Provider } from 'react-redux';

function App() {
  return (
  <>
  <Provider store={store}>
    <h1>Redux Project</h1>
    <WishMessage/>
  </Provider>
    

  </>
  );
}

export default App;
