import React from 'react'
import CounterContext from './Providers/CounterContext';

const Decrementer = () => {
  return (
    <CounterContext.Consumer>
      {({ decrement }) => (
        <button onClick={decrement}>DECREMENTER</button>
      )}
    </CounterContext.Consumer>
  );
}

export default Decrementer;