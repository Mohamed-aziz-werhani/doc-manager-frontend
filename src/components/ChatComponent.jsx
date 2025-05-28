import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3003');

const ChatComponent = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

   socket.on('messagesLoaded', (loadedMessages) => {
      setMessages(loadedMessages);
    });

    return () => {
      socket.off('newMessage');
      socket.off('messagesLoaded');
    };
  }, []);

  const joinRoom = () => {
    if (senderId && receiverId) {
      socket.emit('joinRoom', { senderId, receiverId });
      socket.emit('loadMessages', { senderId, receiverId });
      setMessages([]);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { senderId, receiverId, content: message };
      socket.emit('sendMessage', msg);
    //  setMessages((prev) => [...prev, msg]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat avec Firebase</h2>

      {!joined ? (
        <>
          <input
            type="text"
            placeholder="Ton ID"
            value={senderId}
            onChange={(e) => setSenderId(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="ID du destinataire"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button onClick={joinRoom}>Rejoindre la conversation</button>
        </>
      ) : (
        <>
          <div style={{ marginBottom: '10px' }}>
            <strong>{senderId}</strong> & <strong>{receiverId}</strong>
          </div>
          <div style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px', marginBottom: '10px' }}>
            {messages.map((msg, i) => (
              <div key={i}>
                <b>{msg.senderId === senderId ? 'Moi' : msg.senderId}:</b> {msg.content}
              </div>
            ))}
          </div>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écris un message"
            style={{ marginRight: '10px', width: '70%' }}
          />
          <button onClick={sendMessage}>Envoyer</button>
        </>
      )}
    </div>
  );
};

export default ChatComponent;

