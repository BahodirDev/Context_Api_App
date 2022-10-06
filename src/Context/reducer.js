import React from 'react';

function reducer(state,{type,payload}) {
    switch (type) {
        case "LOADING":
            return{
                ...state,
                games:payload,
                games2:payload
            }      
    
        case "SEARCHING":
            return{
                ...state,
                games2:state.games.filter(s=>s.title == payload)
            }      
        case "SEARCHING_CLEAN":
            return{
                ...state,
                games2:state.games
            }      
        case "POSTS":
            return{
                ...state,
                posts:payload
            }      
        case "DETAIL":
            return{
                ...state,
                game:payload
            }      
    
        case "GET_WHITE":
            return{
                ...state,
                games2:state.games2.map((val,idx)=>{
                      if(val.id == payload){
                        return{
                          ...val,
                          isHeart:false
                        }
                      }else{
                        return val
                      }
                    })
            }      
        case "GET_RED":
            return{
                ...state,
                games2:state.games2.map((val,idx)=>{
                      if(val.id == payload){
                        return{
                          ...val,
                          isHeart:true
                        }
                      }else{
                        return val
                      }
                    })
            }      
    
        default:
           return state
    }
}

export default reducer;

