import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReminderState from './context/ReminderContext/ReminderState';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ReminderState>
      <App />
    </ReminderState>
  </React.StrictMode>
);
