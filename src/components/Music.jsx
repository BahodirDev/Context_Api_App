import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/info.css';
import M from "materialize-css"
function Music(props) {
    const [post,setPost] = useState();

    const navigate = useNavigate()

    function checkUser(){
        if(localStorage.getItem('user')){
            let user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            if(!post == ''){
                fetch("http://localhost:3000/feedbacks_posts",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({posts:post,userId:user.name,isTrue:false})
                })
                .then(data=>data.json())
                .then(res=>{
                    M.toast({html:"Fikringiz adminlar tekshiruvi uchun jo'natildi, tasdiqdan so`ng post beriladi",classes:'green'})
                    setTimeout(()=>{
                        M.toast({html:"Tashakkur",classes:'blue'})
                    },1500)
                    setPost('')
                })
            }else{
                alert('Formani to`ldiring')
            }
          
        }else{
            navigate('/auth')
        }
    }

    return (
        <div className='info'>
            <div className='info_place'>
                <input type="text" className='form-control' placeholder='Loyiha haqida fikringiz' value={post} onChange={(e)=>setPost(e.target.value)}/>
                <button className='btn blue'  id='btn_send' onClick={checkUser}>Jo`natish</button>
            </div>
        </div>
    );
}

export default Music;