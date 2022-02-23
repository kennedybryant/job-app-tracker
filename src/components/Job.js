import React from 'react';

const Job = props => {

    const handleClick = () => {
        props.handleToggle(props.job.id);
    }

    return (
        <div onClick={handleClick} className={`job${props.job.completed ? ' completed' : ''}`}>
            <div>{props.job.title}</div>
            <div>{props.job.company}</div>
            <div>{props.job.location}</div>
            <div>{props.job.remote ? 'Remote' : 'On-Site'}</div>
            <div>{props.job.status}</div>
            <div>{props.job.intDate}</div>
            <div>{props.job.posting}</div>
            <div>{props.job.notes}</div>
            
        </div>
    );
};

export default Job;