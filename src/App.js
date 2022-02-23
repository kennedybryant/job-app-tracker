import React from 'react';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import './components/Job.css';

const jobs = [
  {
    title: "Frontend Engineer",
    company: "Star Company",
    location: "Atlanta, Ga",
    remote: true,
    status: "Applied",
    intDate: "01/01/2022",
    posting: "https://www.linkedin.com/in/kennedy-bryant/",
    notes: "Paid holidays",
    id: 1528817077286,
    completed: false
  },
  {
    title: "Fullstack Developer",
    company: "Star Company",
    location: "Atlanta, Ga",
    remote: false,
    status: "Interested",
    intDate: "",
    posting: "https://www.linkedin.com/in/kennedy-bryant/",
    notes: "Internship",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      jobs: jobs
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      jobs: this.state.jobs.map(job => {
        if(job.id === id) {
          return ({
            ...job,
            completed: !job.completed
          });
        } else {
          return job;
        }
      })
    })
  }

  handleAddJob = (job) => {
    const newJob = {
      title: job.title,
      company: job.company,
      location: job.location,
      remote: job.remote,
      status: job.status,
      intDate: job.intDate,
      posting: job.posting,
      notes: job.notes,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      ...this.state,
      jobs: [...this.state.jobs, newJob]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      jobs: this.state.jobs.filter(job => {
        return !job.completed;
      })
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Job Application Tracker!</h2>
          <h3>Job List:</h3>
            <JobList handleClear={this.handleClear} handleToggle={this.handleToggle} jobs={this.state.jobs}/>
            <JobForm handleAddJob={this.handleAddJob}/>
      </div>
    );
  }
}
export default App;
