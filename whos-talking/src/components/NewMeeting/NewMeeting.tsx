import React from 'react'

import './NewMeeting.scss'

const NewMeeting: React.FC = () => {
  return (
    <>
      <h3> Start a New Meeting </h3>
      <p>
        This form will take you through the steps of setting up a new meeting
        that will not be saved or use any machine learning.
      </p>
      <form method="POST" action="">
        <div className="form-group">
          <label htmlFor="facilitator">What is your name?</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            style={{ width: '50%' }}
            name="facilitator"
          />
          <label htmlFor="numAttendees">How Many Attendees?</label>
          <input
            className="form-control"
            type="number"
            value="3"
            style={{ width: '10%' }}
            name="numAttendees"
            id="numAttendees"
          />
        </div>
        <div className="form-group" id="nameEntry">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            style={{ width: '50%' }}
            name="attendee0"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            style={{ width: '50%' }}
            name="attendee1"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            style={{ width: '50%' }}
            name="attendee2"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Start Meeting"
        />
      </form>
    </>
  )
}

export default NewMeeting
