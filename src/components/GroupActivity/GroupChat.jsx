import React from 'react';
import './GroupChat.scss';
import { default as groups } from './sample-group-cards';

const GroupView = () => (
    <div className="GroupView">
        {/* Will show most recent convos, else display "start a conversation" with 3 contact cards */}
        <h3>Group Conversations</h3>
        <section className="home-card-container">
            {
                Object.keys(groups).map((group) => (
                    <div className="group-card" key={group}>
                        <h4>{groups[group].img}</h4>
                        {/* <p>{groups[group].name}</p> */}
                    </div>
                ))
            }
        </section>
        <h4>See All Groups</h4>
    </div>
);

GroupView.propTypes = {};

GroupView.defaultProps = {};

export default GroupView;
