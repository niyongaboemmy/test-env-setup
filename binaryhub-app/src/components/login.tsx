// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser()
  {
    const dataToLogin = {
      "username": "0782634364",
      "password": "12345"
    };
    axios.post("http://nyambika.com/nyapi/producers/login", dataToLogin).then(res => console.log(res));
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://nyambika.com/nyapi/producers/login', {
        "username": "0782634364",
        "password": "12345"
    }
    );

      // Handle successful login here
      console.log('Login success', response.data);
    } catch (error) {
      // Handle login failure
      console.error('Login failed', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md  bg-red-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
            onClick={loginUser}
            
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
