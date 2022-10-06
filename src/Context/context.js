import { createContext, useReducer } from "react";
import reducer from "./reducer";


export const MyContext = createContext('');

const initialState= {
    games:[],
    games2:[],
    posts:[],
    game:''
}

export function GameContext({children}){

    const [value,dispatch] = useReducer(reducer,initialState);

    value.setData=(data)=>{
        dispatch({type:"LOADING",payload:data})
    }
    value.getFilter2=(search)=>{
        dispatch({type:"SEARCHING",payload:search})
    }
    value.cleanFilter=()=>{
        dispatch({type:"SEARCHING_CLEAN",})
    }

    value.setPosts=(data)=>{
        dispatch({type:"POSTS",payload:data})
    }
    value.getWhite=(id)=>{
        dispatch({type:"GET_WHITE",payload:id})
    }
    value.getRed=(id)=>{
        dispatch({type:"GET_RED",payload:id})
    }
    value.setGame=(data)=>{
        dispatch({type:"DETAIL",payload:data})
    }

  return  <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
}