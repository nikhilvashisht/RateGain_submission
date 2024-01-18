import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 h-full">
      <div className="w-screen flex justify-between">
        {/* Hero */}
        <div className="ml-10">
          <h1 className="space-mono text-8xl pb-5 bg-gradient-to-l bg-clip-text text-transparent from-brand-red via-brand-lightblue to-brand-teal font-bold mt-24">
            SecureClicks
          </h1>
          <p className="text-brand-dark font-bold text-2xl ">
            Redifine your digital adveritising - Ethically.
          </p>
        </div>

        {/* Login form */}
        <div className="bg-brand-white rounded-lg shadow-xl p-8 mr-24">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="text-md font-semibold block pb-2 text-brand-dark"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-white text-brand-dark border-2 border-gray-700 rounded-lg w-full p-3"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-md font-semibold text-brand-dark block pb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-white text-brand-dark border-2 border-gray-700 rounded-lg w-full p-3"
                placeholder="Enter your password"
              />
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-purple-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-brand-dark"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full border-black bg-brand-teal hover:bg-brand-red hover:text-brand-white transition duration-500 border-2 p-3 rounded-lg font-semibold text-lg text-brand-dark"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 flex justify-center text-brand-dark">
            <p>Or continue with these social profiles</p>
          </div>
          {/* Icons would go here */}
          <div className="flex justify-around mt-4">
            <FontAwesomeIcon icon={faGoogle} size="xl" />
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </div>
          <div className="mt-6 text-center text-brand-dark">
            <p>
              Don't have an account?
              <a href="#" className="text-purple-600 hover:underline">
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
