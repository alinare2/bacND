import React, {useEffect} from 'react';
import {useAuth} from './AuthContext';
import './App.css';
import LandingNavBar from './LandingNavBar';
import HomeNavBar from './HomeNavBar';

function App() {
	const {currentUser, isLoggedIn}= useAuth();
	//const [currentPage, setCurrentPage] = useState(<LandingNavBar/>);


	
	useEffect(()=> {}, [currentUser, isLoggedIn]);

	// There's probably a way to do this much more elegantly but I'm too stupid for that shit	
	if((isLoggedIn && currentUser > 0) ||( sessionStorage.getItem("userId") > 0 && sessionStorage.getItem("isLoggedIn"))){
		return <HomeNavBar/>;
	}
	else{
		return <LandingNavBar/>;
	}
	/*	
	return (
		<div className='App'>
			{currentPage}
		</div>
	);
	*/
}

export default App;
