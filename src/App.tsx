import React from 'react';
import './App.css';
import TestUseContext from './components/TestUseContext'
import TestUseReducer from './components/TestUserReducer'

const App: React.FC = () => {
  return (
    <div className="App">
      <TestUseContext />
      <TestUseReducer />
    </div>
  );
}

export default App;
