import React, { useEffect } from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLoginData } from '../../features/WebUser/loginSlice';

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.userLogin)

  useEffect(() => {
   // console.log(data);
    if (data && data.length != 0) {
      if (data.Status == 'success') {
        localStorage.setItem("logged", JSON.stringify(data));
        navigate('/admin-panel')
      } else if (data.Status == 'failure') {
        toast.error(data.Message, {
          id: 'logverifyErr'
        })
      } else {
        toast.error('An error has occurred, please try again', {
          id: 'serverErr'
        })
      }
    }
  }, [data]);

  const onSubmit = async (data) => {
    dispatch(userLoginData(data));
  }

  //input validation error messages
  if (errors) {
    if (errors.username) {
      toast.error(errors.username.message, {
        id: 'emailErr'
      })
    } else if (errors.password) {
      toast.error(errors.password.message, {
        id: 'passwordErr'
      })
    }
  }

  return (
    <>
      {/* <div className="Auth-form-container  bg-dark "> */}
      <form className="Auth-form  py-5 mt-4 m-md-0 m-auto" onSubmit={handleSubmit(onSubmit)} method='post'>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name='username'
              className="form-control mt-1"
              placeholder="Enter user name"
              {...register("username", { required: "username is required" })}
            />
          </div>
          {/* <p>mail error message </p> */}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name='password'
              className="form-control mt-1 l"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
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