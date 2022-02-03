import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function Contact() {

  const [value,setValue] = useState({ fullname: '', detail: '', email: ''});
  const onChange = (e) =>{
    setValue({...value, [e.target.name]: e.target.value});
  }
  const handleClick = (e) =>{
    e.preventDefault();
    const newUser = {
      fullname: value.fullname,
      detail: value.detail,
      email: value.email
    }

    axios.post('http://localhost:5000/app/contact', newUser)
    .then(response => console.log(response.data))
    setValue({fullname: '', detail: '', email:''})
    console.log(value)
  } 


  return(
    <>
      <h1 className="contact">Contact Us</h1>
      <div className="contact-form">
        <TextField
            id="standard-input"
            label="Name"
            type="text"
            variant="standard"
            className="form-field"
            onChange={onChange}
            name="fullname"
            value={value.fullname}
          />
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}  
            variant="standard"
            className="form-field"
            onChange={onChange}
            name="detail"
            value={value.detail}
          />
          <TextField
            id="standard-email-input"
            label="Email"
            type="Email"
            variant="standard"
            className="form-field"
            onChange={onChange}
            name="email"
            value={value.email}
          />
          <Button variant="outlined" className="form-btn" onClick={handleClick}>Send</Button>
      </div>
    </>
  )
}

export default Contact;

