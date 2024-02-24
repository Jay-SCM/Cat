import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Chat from '../components/Chat';

const ChatPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in, if not, redirect to login page
    const isLoggedIn = true; // Assuming you have a way to check if the user is logged in
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <Chat />
    </div>
  );
};

export default ChatPage;
