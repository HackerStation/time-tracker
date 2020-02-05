import React from 'react';
import './App.css';
import TimersDashboard from './components/TimersDashboard';

function App() {
  return (
    <div className='container'>
      <h1 className='main-title'>Timers</h1>
      <div className='mt-5 row'>
        <div className='col-4 m-auto'>
          <TimersDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
