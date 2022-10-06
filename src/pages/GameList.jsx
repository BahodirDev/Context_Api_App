import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/context';

function GameList(props) {
    
    const {games2,getWhite,getRed} = useContext(MyContext);
    function getHeart(id){
        getWhite(id)
      }
      function getHeart2(id){
        getRed(id)
      }
    return (
        <div className='games_list' style={{ marginTop: "30px" }}>
            {
                games2 && games2.map((val, idx) => {
                    return (
                        <div key={idx} className="game_box">
                            <h3>{val.title}</h3>
                            <div>
                                <Link to={'/detail/' + val.id}>
                                    <img src={val.thumbnail} alt="" className='img_game' />
                                </Link>
                            </div>
                            <span>
                                <b>{val.release_date}</b>
                            </span>
                            <div style={{ cursor: "pointer" }} >
                                {
                                    val.isHeart == true ? (
                                        <i className='material-icons' style={{ color: "red" }} onClick={() => getHeart(val.id)}>favorite</i>
                                    )
                                        :
                                        <i className='material-icons' onClick={() => getHeart2(val.id)}>favorite_border</i>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GameList;