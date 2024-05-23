import React from 'react';
import Counter from './Counter';
import EggCounter from './Mixins/EggCounter';
import CounterMixin from './Mixins/CounterMixin';
import './App.css';
import CounterHOC from './HOC/CounterUsingHOC';

function App() {
  return (
    <div className="App">
      <CounterHOC color='pink'/>
    

    </div>
  );
}

export default App;
