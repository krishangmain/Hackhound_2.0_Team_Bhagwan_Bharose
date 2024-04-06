"use client"
import React, {useState,useEffect} from 'react';
import ContactCard from '../components/ui/contactCard'

const Page: React.FC = () => {
    const [user, setUser] = useState<any | null>(null);
    const [otherUsers, setOtherUsers] = useState<any[] | null>([])
    const contacts = ["66106b11c1d08c27244d08c4", "66106b11c1d08c27244d08c6"]
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:4000/user/${localStorage.getItem('userid')}`);
            const user1 = await res.json();
            console.log(user1)
            setUser(user1.user);
            
            await Promise.all(
                contacts.map(async (otherid) => {
                  const newres = await fetch(`http://localhost:4000/user/${otherid}`);
                  const other = await newres.json();
                  setOtherUsers((prev) => [...prev, other.user]);
                })
              );
              
            
        };
    
        fetchData();
    }, []);
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          <ContactCard id="66106b11c1d08c27244d08c4" />
        
      </div>
    </div>
  );
};

export default Page;