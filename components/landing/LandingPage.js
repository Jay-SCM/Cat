//components/landing/LandingPage.js
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="card">
        <h1>Welcome to</h1>
        <h2>Kliea Internet Chat</h2>
        <Link href="/login">
          <button>Log In or Sign Up</button>
        </Link>
      </div>
      <div className="card">
        <img src="/img.jpg" alt="Chat" />
      </div>
    </div>
  );
};

export default LandingPage;




