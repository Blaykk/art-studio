import React from 'react';
function Contact(){
    return (
        <div className="contact">
          <div className="left-side-contact">

          </div>
          <div className="middle-side-conatct">
              <h3 className="contact-title">
                  Contact us
              </h3>
              <form action="#" className="contact-form">
                  <label for="name" className="form-label">
                      Name
                  </label>
                  <input type="text" className="name" name="name" id="name" placeholder="Your name"/>
                  <label for="mail" className="form-label">
                      Email
                  </label>
                  <input type="email" className="mail" placeholder="example@gmail.com" id="mail" name="mail"/>
                  <label for="choise" className="form-label">
                      Company
                  </label>
                  <select name="choise" id="choise" className="choise">
                      <option value="Yes">
                          We are a company
                      </option>
                      <option value="No">
                          No we are not
                      </option>
                  </select>
                  <label for="agree" className="form-label">
                      Agree
                  </label>
                  <input type="checkbox" name="agree" className="check-input" id="agree"/>
                  <button className="form-btn">
                      Send
                  </button>
              </form>
          </div>
          <div className="right-side-contact">

          </div>
      </div>
    )
}
export default Contact;