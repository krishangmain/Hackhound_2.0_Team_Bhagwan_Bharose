import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  id: string
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({id, title, subtitle }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/chat',
      query: id 
    });
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-md cursor-pointer" onClick={handleClick}>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <h2 className="text-lg text-gray-600">{subtitle}</h2>
    </div>
  );
};

export default Card;
