import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

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
    <div className={styles.loginSignUp}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
    </div>
  );
};

export default LoginSignUp;


