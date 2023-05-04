import { useState } from "react";
import '@/styles/globals.css'
import Link from "next/link";

const Home = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuth = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, Password: password }),
    };
    const data = await fetch("http://localhost:3001/login", requestOptions);
  };

  return (
    <>
      <div className="Login-form">
        <h1>Sign in</h1>
        <label>Enter Your Email Address:</label>
        <input
          type="email"
          placeholder="Email address"
          name="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Enter Your Password:</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="Respone-message"></span>
        <button onClick={loginAuth}>Sign in</button>
        Don't Have account? <link href="/register">Sign in</link>
      </div>
    </>
  );
};

export default Home;
