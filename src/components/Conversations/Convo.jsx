import React from 'react';
import './Convo.scss';
import { default as userConvos } from './sample-convo-cards';

const ConvoView = () => (
    <div className="ConvoView">
        {/* Will show most recent convos, else display "start a conversation" with 3 contact cards */}
        <h3>Recent Conversations</h3>
        <section className="home-card-container">
            {
                Object.keys(userConvos).map((user) => (
                    <div className="convo-card" key={user}>
                        <img src={userConvos[user].img} alt={userConvos[user].firstName + " Photo"} />
                        <p>{userConvos[user].firstName}</p>
                    </div>
                ))
            }
        </section>
        <h4>See All Conversations</h4>
    </div>
);

ConvoView.propTypes = {};

ConvoView.defaultProps = {};

export default ConvoView;
