import React from 'react';
import './App.css';
import TestUseContext from './components/TestUseContext'
import TestUseReducer from './components/TestUseReducer'
import TestUseCallback from './components/TestUseCallback'
import TestUseMemo from './components/TestUseMemo'
import TestUseRef from './components/TestUseRef'

const App: React.FC = () => {
  return (
    <div className="App">
      <TestUseContext />
      <hr/>
      <TestUseReducer />
      <hr/>
      <TestUseCallback />
      <hr/>
      <TestUseMemo />
      <hr/>
      <TestUseRef />
      <hr/>
    </div>
  );
}

export default App;
