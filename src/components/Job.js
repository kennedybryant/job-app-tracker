import React from 'react';

const Job = props => {

    const handleClick = () => {
        props.handleToggle(props.job.id);
    }

    return (
        <tr onClick={handleClick} className={`job${props.job.completed ? '-completed' : '-incomplete'}`}>
            <td>{props.job.title}</td>
            <td>{props.job.company}</td>
            <td>{props.job.location}</td>
            <td>{props.job.remote ? 'Remote' : 'On-Site'}</td>
            <td>{props.job.status}</td>
            <td>{props.job.intDate}</td>
            <td>{props.job.posting}</td>
            <td>{props.job.notes}</td>
            
        </tr>
    );
};

export default Job;