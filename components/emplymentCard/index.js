import {Component} from 'react'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

class EmploymentCard extends Component {
  state = {
    fullTime: false,
    partTime: false,
    freelance: false,
    internship: false,
  }

  OnchangeFulltime = () => {
    const {fullTime} = this.state
    this.setState(prvState => ({
      fullTime: !prvState.fullTime,
    }))
  }

  OnchangeParttime = () => {
    const {partTime} = this.state
    this.setState(prvState => ({
      partTime: !prvState.partTime,
    }))
  }

  OnchangeFreelance = () => {
    const {freelance} = this.state
    this.setState(prvState => ({
      freelance: !prvState.freelance,
    }))
  }

  OnchangeInternship = () => {
    const {internship} = this.state
    this.setState(prvState => ({
      internship: !prvState.internship,
    }))
  }

  render() {
    const {fullTime, partTime, freelance, internship} = this.state

    return (
      <div className="formList">
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={fullTime}
              onChange={this.OnchangeFulltime}
              className="form-check-input"
            />
            FUllTime
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={partTime}
              onChange={this.OnchangeParttime}
              className="form-check-input"
            />
            PartTime
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={freelance}
              onChange={this.OnchangeFreelance}
              className="form-check-input"
            />
            Freelance
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={internship}
              onChange={this.OnchangeInternship}
              className="form-check-input"
            />
            Internship
          </label>
        </div>
      </div>
    )
  }
}

export default EmploymentCard
