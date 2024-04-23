import React from 'react';
import './MessageUserView.scss';
import { default as messages } from '../Conversations/userMessages';
import { useParams } from 'react-router-dom/dist';


function MessageUserView() {
    const { userId } = useParams();
    // make call to get specific convo messages
    return (
        <div className="MessageUserView">
            <h2>Conversations</h2>
            <section>
                <div>
                    <h3>Unheard</h3>
                    <div className='message-container'>
                        <p className="message-item">🔊 Unheard audio message 1 🔊</p>
                        <p className="message-item">🔊 Unheard audio message 2 🔊</p>
                        <p className="message-item">🔊 Unheard audio message 3 🔊</p>
                        <p className="message-item">🔊 Unheard audio message 4 🔊</p>
                        <p className="message-item">🔊 Unheard audio message 5 🔊</p>
                        {/* {messages.map((message) => (
                            <div className="convo-card" key={message.timestamp}>
                                <p className='user-name'>{message.file}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
                <div>
                    <h3>Replay</h3>
                    <div className='message-container'>
                        {messages.map((message) => (
                            <div className="message-item" key={message.timestamp}>
                                <p>{message.file}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </section>
        </div>
    );
}

MessageUserView.propTypes = {};
MessageUserView.defaultProps = {};

export default MessageUserView;