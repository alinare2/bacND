import React, {useState, useEffect} from 'react';
import {useAuth} from './AuthContext';
import {useNavigate} from 'react-router-dom';
import './App.css';
import LandingNavBar from './LandingNavBar';
import HomeNavBar from './HomeNavBar';

function App() {
	const navigate = useNavigate();
	const {currentUser, isLoggedIn}= useAuth();
	const [currentPage, setCurrentPage] = useState(<LandingNavBar/>);

	useEffect(() => {
		if(isLoggedIn && currentUser > 0){
			setCurrentPage(<HomeNavBar/>);
			navigate("/")
		}
		else{
			setCurrentPage(<LandingNavBar/>);
			navigate("/");
		}
		
	}, [currentUser, isLoggedIn]);
	return (
		<div className='App'>
			{currentPage}
		</div>
	);
}

export default App;
