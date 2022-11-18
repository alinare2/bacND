import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {useAuth} from './AuthContext';


function Home(){
	const [userConsumes, updateUserConsumes] = useState("");	
	const {currentUser} = useAuth();
	
	useEffect(() =>{
		// REPLACE WITH CODE THAT GETS USER_ID FROM SESSION!!
		//const parameters = {params: {user_id: 1}};
		const user_id = sessionStorage.getItem("userId");
		Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getConsumes.php?user_id=${user_id}`).then((response) =>{
			const res = response.data;
			if(res.length <= 0 ){
				// Put a thing here saying "You haven't had anything to drink!"
				updateUserConsumes(
					<p> You haven't had anything to drink! </p>
				);
			}
			else{
				const newConsumes = res.map((value) =>{
					return (<p key={value.time}> You drank {value.product_name} at {value.time}! </p>);
				});
				newConsumes.reverse();
				
				updateUserConsumes(newConsumes);
			}
			

		}).catch((err) =>{
			console.log(err);
		});
	}, [currentUser]);



	return(
		<>
			<h3> Home Page </h3>

			<p> Something something future of socializing </p>
			<div id='userConsumes'> <h4>Drink Feed: </h4>{userConsumes}</div>
		</>
	);
}

export default Home;
