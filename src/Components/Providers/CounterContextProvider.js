import React, { useState } from 'react'
import CounterContext from './CounterContext';

const CounterContextProvider = () => {
  const [counter, setCounter] =useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider
      value={{ counter, increment, decrement }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;