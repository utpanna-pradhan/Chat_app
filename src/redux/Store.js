import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './Chatslice';

const Store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default Store;
