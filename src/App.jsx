import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useState, useEffect } from 'react';


function App() {
  const artUrl = "https://boolean-uk-api-server.fly.dev/art";
  const [art, setArt] = useState([]);

  const usersUrl = "https://boolean-uk-api-server.fly.dev/Dev-Marlin/contact";
  const [users, setUsers] = useState([]);

  const adviceUrl ="https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState({
    slip: {
      id: null,
      advice: ""
    }
  });

  const [getAdvice, setGetAdvice] = useState(false);

  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  
  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(artUrl);
      const jsonData = await response.json();
      setArt(jsonData);
    };
    fetchArt();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(usersUrl);
      const jsonData = await response.json();
      setUsers(jsonData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await fetch(adviceUrl);
      const jsonData = await response.json();
      setAdvice(jsonData);
    };
    fetchAdvice();
  }, [getAdvice]);

  function addFavourite(fav)
  {
    setFavouriteAdvice([...favouriteAdvice, fav]);
  }

  return (
    <div className="main-layout">
      <ArtsSection art={art} url={artUrl}/>
      <UsersSection users={users}/>
      <AdviceSection advice = {advice} 
                     setGetAdvice ={setGetAdvice} 
                     getAdvice={getAdvice}
                     favouriteAdvice={favouriteAdvice}
                     addFavourite={addFavourite}/>
    </div>
  )
}

export default App
