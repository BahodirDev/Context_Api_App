import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/context';
import GameList from '../pages/GameList';
import '../style/game.css'

function Games(props) {


  const [search, setSearch] = useState();

  const {setData,getFilter2,cleanFilter} = useContext(MyContext)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6a00e2d8a4msh46b0d41b6dfba00p17b76fjsnfe5f4f864379',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
      .then(response => response.json())
      .then(response => {
        setData(response)
      })

  }, [])



  function getFilter(){
    if(search){
      getFilter2(search)
    }else{
      cleanFilter()
    }

  }




  return (
    <>
      <div  className="search_p"> 
        <input type="text" className='form-control' value={search} onChange={(i) => setSearch(i.target.value)} placeholder='Searching...' />
        <button className='btn btn-primary btn_src' onClick={getFilter}>Search</button>
      </div>
     <GameList  />

    </>
  );
}

export default Games;