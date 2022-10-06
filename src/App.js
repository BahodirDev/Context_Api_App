import React, { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import Games from './components/Games';
import DetailGame from './components/DetailGame';
import Music from './components/Music';
import Modal from './components/Modal';
import Feedbacks from './components/Feedbacks';
import Auth from './components/Auth';
import AdminPanel from './components/AdminPanel';

function App() {


  
  return (
    <div className='main_div'>
     <div className='left_bar'>
     {/* box of link */}
     <div className='box_links'>
      {/* link */}
      <Link to={'/'} className="links">
        <div>
          Asosiy
        </div>
      </Link>
      <Link to={'/game'} className="links">
        <div>
          O'yinlar haqida
        </div>
      </Link>
      <Link to={'/feedbacks'} className="links">
        <div>
          Loyiha haqida fikrlar
        </div>
      </Link>
      <Link to={'/feedback'} className="links">
        <div>
          Fikringiz
        </div>
      </Link>
      <Link to={'/'} className="links" onClick={()=>localStorage.clear()}>
        <div>
          Loyihadan chiqish
        </div>
      </Link>
     </div>
     </div>
     <div className='pages'>
      <Routes>
        <Route path='/' index element={<HomePage />} /> 
        <Route path='/game' index element={<Games />} /> 
        <Route path='/feedbacks' index element={<Feedbacks />} /> 
        <Route path='/detail/:name' index element={<DetailGame />} /> 
        <Route path='/feedback' index element={<Music />} /> 
        <Route path='/auth' index element={<Modal />} /> 
        <Route path='/checkAuth' index element={<Auth />} /> 
        <Route path='/adminControl' index element={<AdminPanel />} /> 
      </Routes>
     </div>
    </div>
  );
}

export default App;
