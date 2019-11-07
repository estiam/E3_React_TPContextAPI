import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContextProvider from './Components/Providers/CounterContextProvider';
import Counter from './Components/Counter';
import Incrementer from './Components/Incrementer';
import Decrementer from './Components/Decrementer';

const App = () => {
  return (
    <main>
      <CounterContextProvider>
        <Counter />
        <Incrementer />
        <Decrementer />
      </CounterContextProvider>
    </main>
  );
}

export default App;