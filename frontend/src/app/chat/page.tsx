import React from 'react';
import ChatBox from '../components/ui/ChatBox';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
    const router = useRouter();
  const { id } = router.query;
  return (
    <ChatBox otherid={id}/>
  );
};

export default Home;