import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Activity_data } from '../../Data/activity_data';
import './actblog'

const ActivityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const activity = Activity_data.find((act) => act.id === parseInt(id));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!activity) {
        return <p>Activity not found</p>;
    }

    return (
        <div className="activity-container">
            <div className="activity-container-in">
                <div className="activity-detail-nav">
                    <p onClick={() => navigate('/')}>Back to Activities</p>
                </div>
            <div className="activity-detail-content">
                <h1>{activity.title}</h1>
                <img src={activity.image} alt={activity.title} />
                <p>{activity.discription}</p>
            </div>
            </div>
        </div>
    );
}

export default ActivityDetail;
