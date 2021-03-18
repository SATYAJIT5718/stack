import React from 'react';
import {Counter} from './component/counter/Counter'
import './App.css';
import {store} from './component/store'
import {Provider} from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <h1>App Component</h1>
      <Counter/>
    </Provider>
    </>
  );
}

export default App;
