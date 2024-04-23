import React from 'react';
import ConvoView from '../Conversations/RecentConvos';
import GroupView from '../GroupActivity/GroupChat';
//import PropTypes from 'prop-types';
import './Home.scss';

const Home = () => (
    <div className="Home">
        <ConvoView></ConvoView>
        <hr />
        <GroupView></GroupView>
        <hr />
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
