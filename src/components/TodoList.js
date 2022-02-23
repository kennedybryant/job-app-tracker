// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
const handleClick = () => {
    props.handleClear();
}

    return (
        <div>
            {props.jobs.map(job => (
                <Todo handleToggle={props.handleToggle} key={job.id} job={job}/>
            ))}
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
};

export default TodoList;