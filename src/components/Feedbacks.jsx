import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { MyContext } from '../Context/context';
import '../style/feeds.css'

function Feedbacks(props) {
    // const [posts, setPosts] = useState([]);
    const {posts,setPosts} = useContext(MyContext)
    useEffect(() => {
        fetch('http://localhost:3000/feedbacks_posts')
            .then(data => data.json())
            .then(res => {
                setPosts(res)
            })
    }, [])



    return (
        <div className='feeds'>
            {
                posts && posts.map((item, idx) => {
                    if(item.isTrue ){
                        return (
                            <div className='feeds_cons'>
                                <div>
                                    <h3 style={{margin:'0'}}>{item.userId}</h3>
    
                                </div>
                                <div>
                                    <p style={{margin:'0'}}>{item.posts}</p>
                                </div>
                            </div>
                        )
                    }
                    
                })
            }
        </div>
    );
}

export default Feedbacks;