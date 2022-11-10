import {Routes, Route} from 'react-router-dom';

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
