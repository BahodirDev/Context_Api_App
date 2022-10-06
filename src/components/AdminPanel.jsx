import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Context/context';

function AdminPanel(props) {
    

    const {setPosts,posts} = useContext(MyContext)

    useEffect(() => {
        fetch('http://localhost:3000/feedbacks_posts')
            .then(data => data.json())
            .then(res => {
                
                setPosts(res)
            })
    }, [])

   function changeStatus(id){

  let newMass =  posts.filter(s=>s.id == id)

    fetch('http://localhost:3000/feedbacks_posts/'+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({...newMass[0],isTrue:true})
    })
            .then(data => data.json())
            .then(res => {
                console.log(res);
                let mass = posts.map((val,idx)=>{
                    if(val.id == id){
                        return{
                            ...val,
                            isTrue:true
                        }
                    }else{
                        return val
                    }
                })
                setPosts(mass)

            })
   }
   function changeStatus2(id){
    let newMass =  posts.filter(s=>s.id == id)
    fetch('http://localhost:3000/feedbacks_posts/'+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({...newMass[0],isTrue:false})
    })
            .then(data => data.json())
            .then(res => {
                console.log(res);
                let mass = posts.map((val,idx)=>{
                    if(val.id == id){
                        return{
                            ...val,
                            isTrue:false
                        }
                    }else{
                        return val
                    }
                })
                setPosts(mass)
            })
   }

   function remove(id){
    fetch('http://localhost:3000/feedbacks_posts/'+id,{
        method:"DELETE"
    })
            .then(data => data.json())
            .then(res => {
               let newMass = posts.filter(s=>s.id !== id);
               setPosts(newMass)
            })
   }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th id='no'>NO</th>
                        <th>Name</th>
                        <th>Post</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        posts && posts.map((val,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td id='no'>{val.id}</td>
                                    <td>{val.userId}</td>
                                    <td>{val.posts}</td>
                                    {
                                        val.isTrue ?
                                        <td>
                                            <button className='btn green' onClick={()=>changeStatus2(val.id)}>Active</button>
                                        </td>
                                        :
                                        <td>
                                        <button className='btn red' onClick={()=>changeStatus(val.id)}>Off</button>
                                    </td>
                                    }
                                    <td>
                                    <button className='btn red' onClick={()=>remove(val.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        }).reverse()
                    }
                   
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;