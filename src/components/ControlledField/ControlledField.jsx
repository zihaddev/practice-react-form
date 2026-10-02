//import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.targer.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.targer.value);
  };

  const handlepasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          defaultValue={email}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          onChange={handlepasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <pn style={{ color: "red" }}>
        <small>{error}</small>
      </pn>
    </div>
  );
};

export default ControlledField;
