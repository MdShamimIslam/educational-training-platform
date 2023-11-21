import React, { useContext } from "react";
import signUpImg from "../../assets/signUp.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser,profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 1500,
          });

        profileUpdate(name,photoURL)
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
        })
        .then(error => console.error(error));

        e.target.reset();
        navigate(location?.state ? location.state : '/')
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero mb-8 mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-20">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Sign Up now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center">
              Already have an account ? <Link className="text-lg text-blue-500" to="/signIn">
                Sign In
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
