"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState({
    aadhaar: "",
    password: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      console.log(data);
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const user = await res.json();
      console.log(user);
      console.log(user.user._id);
      if (user.user._id) {
        setIsSubmitted(true);
        localStorage.setItem("userid", user.user._id);
        // Redirect to home page after successful login
        router.push('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  return (
    <section>
      <div className=" bg-gray-800 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className=" bg-white p-8 rounded-md xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-4 flex justify-center"></div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Don't have an account? No Worries{" "}
            <a
              href="/signup"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign Up
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Aadhaar{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="aadhaar"
                  placeholder="aadhaar"
                  id="aadhaar"
                  name="aadhaar"
                  value={data.aadhaar}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div>
              <div className="mt-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-400/80"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
