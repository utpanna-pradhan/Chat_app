
import React, { useState } from 'react';//allow to manage text input
import { useDispatch, useSelector } from 'react-redux';//send acction to store,access data from  store
import { sendMessage, receiveMessage } from '../redux/Chatslice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatapp = () => {
  const [input, setInput] = useState('');//store value
  const dispatch = useDispatch();//send to redux
  const messages = useSelector((state) => state.chat.messages);//msg

  //check if input id empty then show alert box
  const handleSendMessage = () => {
    if (input.trim() === '') {
      alert('Empty message,need to enter something');
      return;
    }

    dispatch(sendMessage(input)); // send to redux
    setInput(''); //clear it after sending

   
    setTimeout(() => {
      dispatch(receiveMessage('Hello!! how can i help you')); //static response
    }, 1000);
  };

  //content
  return (
    <div className="container  ">
      <h1 className='text-center mt-5 text-primary'>CHAT APP</h1>
      <div className="card ">
        <div className="card-header text-primary">Chat Application</div>
        <div className="card-body chat-window" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender === 'User' ? 'text-end' : ''}`}>
              <strong>{msg.sender}:</strong> {msg.text}
              <div className="text-muted" style={{ fontSize: '0.8em' }}>{msg.timestamp}</div>
            </div>
          ))}
        </div>
        <div className="card-footer d-flex">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
          />
          <button className="btn btn-primary ms-2" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatapp;
