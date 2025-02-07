import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useState, useEffect } from 'react';


function App() {
  const artUrl = "https://boolean-uk-api-server.fly.dev/art";
  const [art, setArt] = useState([]);
  
  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(artUrl);
      const jsonData = await response.json();
      console.log(jsonData);
      setArt(jsonData);
    };
    fetchArt();
  }, []);

  return (
    <div className="main-layout">
      <ArtsSection art={art} url={artUrl}/>
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
