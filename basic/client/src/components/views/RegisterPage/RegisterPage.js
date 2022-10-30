import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_actions";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler}></input>
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordHandler}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        ></input>
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
