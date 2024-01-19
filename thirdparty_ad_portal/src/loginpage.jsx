import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Using react-icons for icons
import { useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/dashboard");
  }

  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-row justify-between items-center pl-12 pr-12"
      style={{ backgroundColor: "gray-100" }}
    >
      <div className="flex flex-col justify-around pb-12 w-1/2 ">
        <h2 className="text-7xl leading-[6rem] text-gray-700">
          Navigate Your <br />
          Ad Space <br />
          with
        </h2>
        <h1 className="space-mono text-7xl pb-5 bg-gradient-to-r bg-clip-text text-transparent from-brand-red via-brand-lightblue to-brand-teal font-bold ">
          SecureClicks
        </h1>
      </div>
      <div className=" rounded-lg max-w-3xl w-full-3/4 mx-4 bg-white shadow-md rounded px-8 pt-5 pb-5 mb-4 mt-4 flex justify-between">
        <div className="w-full bg-white px-6 py-4 rounded-lg">
          <div className="mb-4">
            <h3 className="text-2xl text-center font-semibold mb-6">Sign In</h3>
            <div className="flex items-center justify-center space-x-4">
              <button className="btn flex items-center justify-center px-4 py-2 border rounded text-sm font-medium text-gray-600 bg-white hover:bg-gray-100 focus:outline-none">
                <FaGoogle size={25} className="text-blue-500 mr-2" />
                Sign in with Google
              </button>
              <button className="btn flex items-center justify-center px-4 py-2 border rounded text-sm font-medium text-gray-600 bg-white hover:bg-gray-100 focus:outline-none">
                <FaFacebook size={30} className="text-blue-700 mr-2" />
                Sign in with Facebook
              </button>
            </div>
            <p className="text-center my-4">or Sign in with Email</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username or email address
              </label>
              <input
                // type="text"
                name="email"
                id="email"
                // autoComplete="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // autoComplete="current-password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  
                  className="ml-2 block text-sm text-gray-900"
                >
                  Keep me logged in
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password
                </a>
              </div>
            </div>
            <div>
              <button
                onClick={handlenavigate}
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {/* <Link to={"/dashboard/overview"}>Sign in</Link> */}
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
