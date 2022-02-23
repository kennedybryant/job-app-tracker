// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Job from './Job';

const JobList = props => {
const handleClick = () => {
    props.handleClear();
}

    return (
        <div>
            {props.jobs.map(job => (
                <Job handleToggle={props.handleToggle} key={job.id} job={job}/>
            ))}
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
};

export default JobList;