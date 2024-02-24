//components/LoginSignUp
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginSignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your login logic here
    // Assuming login is successful, navigate to the chat page
    router.push('/chat');
  };

  return (
    <div className="login-signup">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginSignUp;

