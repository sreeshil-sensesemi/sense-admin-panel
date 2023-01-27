import React from 'react'
import './Login.css'


function Login() {
  return (
    <>
      {/* <div className="Auth-form-container  bg-dark "> */}
      <form className="Auth-form bg-dange py-5 mt-4 m-md-0 m-auto">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter user name"
            />
          </div>
          {/* <p>mail error message </p> */}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1 l"
              placeholder="Enter password"
            />
          </div>
          {/* <p>password error message </p> */}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn login-button">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
      {/* </div> */}
    </>
  )
}

export default Login