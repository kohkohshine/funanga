import axios from 'axios';
import { useState } from 'react';

//const backend = import.meta.env.BACKEND_URL;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
          });
          const token = response.data.token;
          localStorage.setItem('token', token);
    
          console.log('Login successful!');
        } catch (error) {
          console.error('Login failed:', error);
        }
      };


      return (
        <form onSubmit={handleLogin} className="flex flex-col gap-3 glassCardSmall p-6">
         
          <label htmlFor="email" className="flex flex-col text-[#4b1544] font-bold">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[37vw] h-8 glassInput transition-all font-medium"
            />
          </label>
    
         
          <label htmlFor="password" className="flex flex-col text-[#4b1544] font-bold">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[37vw] h-8 glassInput transition-all font-medium"
            />
          </label>
    
          
          <label className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-1"
              style={{ borderRadius: '50%' }}
            />
            Remember me
          </label>
    
       
          <button type="submit" className="jellyButton">
            Log In
          </button>
        </form>
      );
};

export default LoginForm;
