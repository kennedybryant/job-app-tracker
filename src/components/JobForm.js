import React from 'react';

import { Form, Button, FloatingLabel } from "react-bootstrap";

class JobForm extends React.Component {
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
            <Form onSubmit={this.handleSubmit}>
                <FloatingLabel
                    controlId='floatingtitle'
                    label="Role Title"
                >
                     <Form.Control onChange={this.handleChanges} type='text' name='title' value={this.state.job.title} placeholder="Role Title" />
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingcompany'
                    label="Company Name"
                >
                   <Form.Control onChange={this.handleChanges} type='text' name='company' value={this.state.job.company} placeholder="Company Name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatinglocation'
                    label="Role Location"
                >
                    <Form.Control onChange={this.handleChanges} type='text' name='location' value={this.state.job.location} placeholder="Role Location" />
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingremote'
                    label="Is the Position Remote?"
                >
                    <Form.Select name="remote" value={this.state.job.remote} onChange={this.handleChanges}>
                        <option>Remote?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingstatus'
                    label="Application Status"
                >
                    <Form.Select name="status" value={this.state.job.status} onChange={this.handleChanges}>
                        <option value>Status?</option>
                        <option value="interested">Interested</option>
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingintdate'
                    label="Interview Date"
                >
                    <Form.Control onChange={this.handleChanges} type='date' name='intDate' value={this.state.job.intDate} />
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingposting'
                    label="Job Post Link"
                >
                     <Form.Control onChange={this.handleChanges} type='url' name='posting' value={this.state.job.posting} placeholder="URL"/>
                </FloatingLabel>
                <FloatingLabel
                    controlId='floatingnotes'
                    label="Notes"
                >
                    <Form.Control as="textarea" onChange={this.handleChanges} type='text' name='notes' value={this.state.job.notes} placeholder="Additional Notes"/>
                </FloatingLabel>
                <Button variant="primary" type="submit">Add Job</Button>
            </Form>
        );
    }
}

export default JobForm;