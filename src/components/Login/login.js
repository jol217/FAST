import React from 'react'
import './login.css'

const Home = () => (
  <div className="login-form" class="center">
    <h1><a href="/login" >Triton Market</a></h1>
    <div class="content-box">
      <h3 id="login-title">Log in</h3>

      <label for="email"><strong>UCSD Email:</strong></label> <br /> 
      <input type="email" class="login-input" name="email" id="email" /> <br />

      <label for="password"><strong>Password:</strong></label>
      <a id="login-forgot-pass" href="/forgot_password">Forgot Password?</a><br />
      <input type="password" class="login-input" name="password" id="password" /> <br />

      <br />

      <button type="submit" id="login-button">Log in</button> <br />

      <a href="/register">Register account</a> <br />
      <a href="/home">To skip this, click here</a>

    </div>
  </div>
   
)

export default Home
