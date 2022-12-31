import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Consume from './Consume';
import Friends from './Friends';
import Logout from './Logout';


export default function HomeNavBar(){
    return(
        <>
			<header className='App-header'>	
			<h1> bacND </h1>
			<meta charSet='utf-8'></meta>
			<div className='nav' id='navbar'>
				<h3><NavLink to='/'> Home &#127968; </NavLink></h3>
				<h3><NavLink to='/profile'> My Profile </NavLink></h3>
				<h3><NavLink to='/consume'> CONSUME </NavLink> </h3>
				<h3><NavLink to='/friends'> Frend &#128578;</NavLink></h3>
				<h3><NavLink to ='/logout'> Logout </NavLink></h3>
			</div>
			</header>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/consume" element={<Consume/>}/>
				<Route path="/friends" element={<Friends/>}/>		
				<Route path="/logout" element={<Logout/>}/>
				
			</Routes>
        </>
    );
}