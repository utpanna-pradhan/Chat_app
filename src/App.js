import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Chatapp from './Components/Chatapp';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Chatapp />
    </Provider>
  );
}

export default App;
