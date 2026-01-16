import React from 'react';
import './App.css';
import {
  Title, InputForm, Income,
  Expense
} from './components';

function App() {
  return (
    <div className="App">
    <Title></Title>
    <InputForm></InputForm>
    <div className="transaction-list">
      
      <div className="transaction-heading">
        <h3>Transaction List</h3>
      </div>
      <div className="transactions">
        <Income></Income>
        <Expense></Expense>
      </div>
    </div>
    </div>
  );
}

export default App;
