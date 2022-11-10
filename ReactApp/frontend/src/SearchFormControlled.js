import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

function SearchFormControlled(){


	const [search, updateSearch] = useState("");
	const [result, updateResult] = useState();
	const [resultVisual, updateResultVisual] = useState({display: "none"});
	const [drink, updateDrink] = useState(-1);
	const user = 14;
	const history = useNavigate();

	function handleSubmitClick(e){
		e.preventDefault();
		// If drink < 0 then it has not been selected yet, so it should not be fucked with
		if(drink >= 0){
			const request = {drink_id: drink,
					user_id: user};
			Axios.post(`http://db8.cse.nd.edu/cse30246/bacND/server/postConsumes.php`, request).then((response) =>{
				console.log(response);
			}).catch((error) =>{
				console.log(error);
			});
			history('/home')
		}
	}

	function handleDrinkClick(e){
		const [drink_id, drink_name] = e.target.id.split("|");
		console.log(drink_id);
		console.log(drink_name);
		updateSearch(drink_name);	
		updateResultVisual({display: "none"});
		updateDrink(drink_id);
	}

	function handleSearchChange(e){
		updateSearch(e.target.value);
		const str = e.target.value;
		// MAYBE ADD A THING HERE THAT REMOVES THE BUTTON IF YOU START TYPING AGAIN OR DISABLES IT OR SOMETHING THAT WOUDL BE COOL
		
		console.log(drink);
		updateDrink(-1);
		if(str.length === 0){
			//resultRef.current.innerHTML="";
			updateResultVisual({display:"none"});
			return 
		}
		else{
			Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getDrink.php?drink_name=${str}`).then((response) => {
				if(response.data.length > 0){
					let res = response.data.map((value) => {
						return (
								<div key={`${value.product_name}${value.drink_id}`} id={`${value.drink_id}|${value.product_name}`} onClick={handleDrinkClick}> 
									{value.product_name} 
								</div>
						);
					
					});
					updateResult(res);	
					updateResultVisual({display:"block"});
					 
				}
				else{
					console.log('nope');
					updateResultVisual({display:"none"});
				}
			});	
		}
	}



	
	return(
		<>
			<form>
				<label>
					Search:
					<input type='text' value={search} onChange={handleSearchChange}/>
					<input type='submit' value="Consume!" onClick={handleSubmitClick}/>
					<div id="livesarch" style={{border:"1px solid #A5ACB2", display:resultVisual.display}} >{result}</div> 
				</label>
			</form>
		</>
	);

}

export default SearchFormControlled;
