import React from 'react';
import './Convo.scss';
import { default as userConvos } from './sample-convo-cards';
import { useNavigate } from 'react-router-dom/dist';

const RecentConvos = () => {

    const navigate = useNavigate();


    function getMessageUserView(userID) {
        console.log("HERE: ", userID);
        navigate(`/communicate/${userID}`);
    }

    return (
        <div className="RecentConvoView">
            {/* Will show most recent convos, else display "start a conversation" with 3 contact cards */}
            <h3>Recent Conversations</h3>
            <section className="home-card-container">
                {
                    Object.keys(userConvos).map((user) => (
                        <div className="convo-card" key={user} onClick={() => getMessageUserView(userConvos[user].userID)}>
                            <img src={userConvos[user].img} alt={userConvos[user].firstName + " Photo"} />
                            <p>{userConvos[user].firstName}</p>
                        </div>
                    ))
                }
            </section>
            <h4>See All Conversations</h4>
        </div>
    );
}

RecentConvos.propTypes = {};

RecentConvos.defaultProps = {};

export default RecentConvos;
