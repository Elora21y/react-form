import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password)

    //submit btn click korle trpr error kaj hbe
    if (password.length < 6 || password.length > 10) {
      setError("Please enter under (6-10 ) digit password");
    } else {
      setError("");
    }
  };

  const handleName = (e) =>{
    setName(e.target.value)
    // console.log(e.target.value)
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value)

    //type korar sathe sathe response krbe
    if (password.length < 6 || password.length > 10) {
      setError("Please enter under (6-10 ) digit password");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>

        <input onChange={handleName} type="text" name={name} placeholder="Your Name" required />
        <br />
        <input onChange={handleEmail} type="email" name="email" defaultValue={email} placeholder='email' />
        <br />
        <input
          onChange={handlePassword}
          type="password"
          defaultValue={password}
          name="password"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledField;
