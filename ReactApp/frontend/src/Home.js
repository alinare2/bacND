import React, {useEffect, useState} from 'react';
import Axios from 'axios';



function Home(){
	const [userConsumes, updateUserConsumes] = useState("");	

	useEffect(() =>{

		// REPLACE WITH CODE THAT GETS USER_ID FROM SESSION!!
		//const parameters = {params: {user_id: 1}};
		const user_id = 1;
		Axios.get(`http://localhost:5000/api/getConsumes/${user_id}`).then((response) =>{
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

				
				updateUserConsumes(newConsumes);
			}
			

		}).catch((err) =>{
			console.log(err);
		});
	}, []);



	return(
		<>
			<h3> Home Page </h3>

			<p> Something something future of socializing </p>
			<div id='userConsumes'> <h4>Drink Feed: </h4>{userConsumes}</div>
		</>
	);
}

export default Home;
