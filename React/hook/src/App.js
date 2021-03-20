import React from 'react';
import EventHandler from './component/eventHandler';
import WishHandler from './component/wishHandler';
import Counter from './component/Counter';

const App = () => {
  return (
    <>
      <EventHandler />
      <WishHandler/>
      <Counter/>
    </>
  )
}

export default App
