import React from 'react';
import { useLocation } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './Record.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faMicrophone);


function Record() {

    return (
        <div className="Record">
            <h1>New Dialogue</h1>
            <section className='record-topic'>
                <h4>What are we talking about?</h4>
                <input type="text" placeholder="topic" />
            </section>
            <section className='recording-booth'>
                <h3>Hi</h3>
                <FontAwesomeIcon icon="microphone" style={{ color: "#F2F" }} />
            </section>
        </div>
    )
};

Record.propTypes = {};

Record.defaultProps = {};

export default Record;
