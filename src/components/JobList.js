// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Job from './Job';

import { Table } from 'react-bootstrap';

const JobList = props => {
// const handleClick = () => {
//     props.handleClear();
// }

    return (
        <Table className='jobTable table-striped table-hover table-responsive'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Role Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Remote?</th>
                    <th>Status</th>
                    <th>Interview Date</th>
                    <th>Job Post</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                    {props.jobs.map(job => (
                <Job handleToggle={props.handleToggle} key={job.id} job={job}/>
            ))}
            </tbody>
            
            {/* <button onClick={handleClick}>Clear Completed</button> */}
        </Table>
    )
};

export default JobList;