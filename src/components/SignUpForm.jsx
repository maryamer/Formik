import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const changeHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={userData.name}
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={userData.email}
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={changeHandler}
            value={userData.password}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
