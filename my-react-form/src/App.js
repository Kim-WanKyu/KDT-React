import React from "react";
import './exam.css';

export default function Login() {
  const PHONE_NUM_LIST=['010', '011', '012'];

  function handleSubmit(event) {
    event.preventDefault();
    // e.target은 빨간줄 떴음..
    const formData = new FormData(event.currentTarget);
    // console.log(formData.get("email"));
    const email = formData.get("email");
    console.log('email', email);
    const data = Object.fromEntries(formData);
    const phoneNum = formData.get("phone1") + '-' + data.phone2;
    console.log("data", data);
    console.log('phoneNum', phoneNum);
    
  }

  return (
    <div className="container">
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <hr />
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>Gender</label>
            <select name="gender">
              <option value="male">Male</option>
              <option value="femail">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
          </div>
          <div>
            <label className="radio_label">Quantity</label>
            <input defaultChecked='1' type="radio" name="quantity" value="1" /> 1
            <input type="radio" name="quantity" value="2" /> 2
            <input type="radio" name="quantity" value="3" /> 3
            <br />
          </div>
          <div>
            <label>Terms</label>
            <input type="checkbox" name="terms" value="Y" /> 
            <span>I agree to the Terms and Conditions</span>
          </div>
          <Tel></Tel>
          <div>
            <p>
              <button type="submit">Register</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  
  function Tel() {
    const phoneList = [];
    for (let i = 0; i < PHONE_NUM_LIST.length; i++) {
      phoneList.push(
        <option value={PHONE_NUM_LIST[i]}>{PHONE_NUM_LIST[i]}</option>
      )
    }

    return (
      <div>
        <label>Tel.</label>
        <select name='telList'>
          {phoneList}
        </select>
        <input type="tel" name="tel" />
      </div>
    );
  }
}