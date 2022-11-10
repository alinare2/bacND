import {Routes, Route, NavLink} from 'react-router-dom';

import './App.css';
import SearchFormControlled from './SearchFormControlled';
import Home from './Home';
import Profile from './Profile';
import Landing from './Landing';
import Friends from './Friends';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>	
			<h1> bacND </h1>
			<meta charSet='utf-8'></meta>
			<div className='nav' id='navbar'>
				<h3><NavLink to='/home'> Home &#127968; </NavLink></h3>
				<h3><NavLink to='profile'> My Profile </NavLink></h3>
				<h3><NavLink to='consume'> CONSUME </NavLink> </h3>
				<h3><NavLink to='friends'> Frend &#128578;</NavLink></h3>
			</div>
			</header>
			<Routes>
				<Route path="/" element={<Landing/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/consume" element={<SearchFormControlled/>}/>
				<Route path="/friends" element={<Friends/>}/>		
			</Routes>
		</div>
	);
}

export default App;
