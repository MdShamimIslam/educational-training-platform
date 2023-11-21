import React, { useContext } from "react";
import loginImg from '../../assets/login.png';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            e.target.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Sign In successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
        })
        
    }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-4xl font-bold text-center">Sign In now!</h1>
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
            </form>
            <p className="text-center">Don't have an account ? <Link className="text-lg text-blue-500" to='/signUp'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
