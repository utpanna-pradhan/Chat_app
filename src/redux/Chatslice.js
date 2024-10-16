
import { createSlice } from '@reduxjs/toolkit';

//create slice
const Chatslice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    user: { id: 1, name: 'User' },
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: state.user.name,
        //time of msg
        timestamp: new Date().toLocaleTimeString(),
        
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload,
        sender: 'User2', 
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

//export so that other components canu se it
export const { sendMessage, receiveMessage } = Chatslice.actions;
export default Chatslice.reducer;
