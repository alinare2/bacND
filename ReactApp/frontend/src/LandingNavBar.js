import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';
import {Routes, Route, NavLink} from 'react-router-dom';

/*
	So basically
	'/' Should be really basic pretty landing stuff
	'/about' should be like the project information page (or some other shit if you want)
	'/login' and '/signup' are self-explanatory

*/

function LandingNavBar(){
	return (
		<>
			<h3> Landing Nav Bar Stuff</h3>
			<div className='nav' id='navbar'>
				<h3><NavLink to='/'>bacND</NavLink></h3> 
				<h3><NavLink to='/about'>About</NavLink></h3>
				<h3><NavLink to='/login'>Login</NavLink></h3>
				<h3><NavLink to='/signup'>Sign up</NavLink></h3>
			</div>
			<Routes>
                <Route path='/' element={<Landing/>}/>
				<Route path="/about" element={<>Help Me!</>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<Signup/>}/>
			</Routes>
		</>
	);	

}

export default LandingNavBar;
