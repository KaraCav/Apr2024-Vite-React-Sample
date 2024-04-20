import React from 'react';
import ConvoView from '../Conversations/Convo';
import GroupView from '../GroupActivity/GroupChat';
//import PropTypes from 'prop-types';
import './Home.scss';

const Home = () => (
    <div className="Home">
        <ConvoView></ConvoView>
        <GroupView></GroupView>
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
