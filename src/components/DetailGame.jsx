import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context/context';
import '../style/gameInfo.css';

function DetailGame(props) {

    const {game, setGame} = useContext(MyContext)
    const { name } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a00e2d8a4msh46b0d41b6dfba00p17b76fjsnfe5f4f864379',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + name, options)
            .then(response => response.json())
            .then(response => {
                setGame(response)
                
            })
            .catch(err => console.error(err));
    }, [name])


    console.log(game);

    return (
        <div className='info_box'>
            {
                game &&
                <div>
                    <div style={{display:"flex",justifyContent:'center'}}>
                        <img src={game.thumbnail}  id="d_img" alt="" />
                    </div>
                    {
                        game.screenshots[0] &&
                        <div  className="detail_imds">
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src={game.screenshots[0].image}   alt="" />
                            </div><div style={{display:'flex',justifyContent:'center'}}>
                                <img src={game.screenshots[1].image}   alt="" />
                            </div><div style={{display:'flex',justifyContent:'center'}}>
                                <img src={game.screenshots[2].image}   alt="" />
                            </div>
                        </div>
                    }
                    <div>
                        <h4 style={{textAlign:'center'}}>{game.title}</h4>
                        <p>{game.description}</p>
                        <div>
                            <button className='btn red'>
                                <a target={'_blank'} style={{textDecoration:'none',color:'#fff'}} href={game.game_url}>Main Platform</a>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default DetailGame;