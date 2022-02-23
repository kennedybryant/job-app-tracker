import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            job: {
                title: "",
                company: "",
                location: "",
                remote: "",
                status: "",
                intDate: "",
                posting: "",
                notes: ""
            }
        }
    }

    handleChanges = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({job:{
            ...this.state.job,
            [name]: value
        } 
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddJob(this.state.job);
        console.log(this.state.job)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name='title' value={this.state.job.title} />
                <input onChange={this.handleChanges} type='text' name='company' value={this.state.job.company} />
                <input onChange={this.handleChanges} type='text' name='location' value={this.state.job.location} />
                <select name="remote" value={this.state.job.remote} onChange={this.handleChanges}>
                    <option value=""></option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="status" value={this.state.job.status} onChange={this.handleChanges}>
                    <option value=""></option>
                    <option value="interested">Interested</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                </select>
                <input onChange={this.handleChanges} type='date' name='intDate' value={this.state.job.intDate} />
                <input onChange={this.handleChanges} type='text' name='posting' value={this.state.job.posting} />
                <input onChange={this.handleChanges} type='text' name='notes' value={this.state.job.notes} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;