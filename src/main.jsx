import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider component to make the Redux store available to the app */}
    <Provider store={store}>
      {/* Main App component */}
      <App />
    </Provider>
  </React.StrictMode>,
)
