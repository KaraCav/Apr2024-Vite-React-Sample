import React from 'react';
import './Convo.scss';
import { default as userConvos } from './sample-all-convo-cards';
import MessageUserView from '../UserView/MessageUserView';
import { useNavigate } from 'react-router-dom/dist';
import http from '../../http/axios-config';

const AllConvos = () => {
    // made sure frontend Axios can properly call backend - success!
    http.get('/identity').then(response => console.log(JSON.stringify(response.data)));
    // http.get('/identity', function (req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     console.log(JSON.stringify(data));
    // })


    const navigate = useNavigate();


    function getMessageUserView(userID) {
        console.log("HERE: ", userID);
        navigate(`/communicate/${userID}`);
    }

    return (
        <div className="AllConvosView">
            {/* Should show most recent convos, else display "start a conversation" with 3 contact cards 
        TO DO: create the "start a conversation" view*/}
            <h3>All Conversations</h3>
            <section className='allConvosContainer'>
                {
                    Object.keys(userConvos).map((user) => (
                        <div className="convo-card" key={user} onClick={() => getMessageUserView(userConvos[user].userID)}>
                            <img src={userConvos[user].img} alt={userConvos[user].firstName + " Photo"} />
                            <p className='user-name'>{userConvos[user].firstName} {userConvos[user].lastName}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
};



AllConvos.propTypes = {};

AllConvos.defaultProps = {};

export default AllConvos;
