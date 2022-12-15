import React from 'react'
import "./Form.css"

function Form() {
  return (
    <form>
      <div className="container">
        <div className="form__row">
          <div className="form__col">
            <div className="form__details">
              <input type="text" placeholder='First Name' /><br />
              <input type="email" placeholder='Email' /> <br />
              <input type="text" placeholder='Subject' /><br />
              <textarea placeholder='Message'></textarea>
            </div>
          </div>
          <div className="form__col">
            <img src="../images/appointment.jpg" alt="" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form