import React, {useRef} from 'react';
import Axios from 'axios';

function SearchForm(){

	const searchRef=useRef();
	const resultRef=useRef();


	function clickResult(e){
		console.log("HEY");	
	}
	function handleChange(e){
		const str = searchRef.current.value;
		if(str.length === 0){
			resultRef.current.innerHTML="";
			resultRef.current.style.display="none";
		}
		else{
			Axios.get(`http://localhost:5000/api/get/${str}`).then((response) => {
				// If you actually get a response then put it below the search form
				if(response.data.length > 0){
					console.log(response.data[0].product_name);
					let inner = response.data.reduce((acc, value) => {
						console.log(value);
						return `${acc} <div id=${value.drink_id} onClick={clickResult}> ${value.product_name} <br/></div>`;
					}, "");	
					

					
					resultRef.current.style.display="block";
					resultRef.current.innerHTML=inner;
					resultRef.current.style.border="1px solid #A5ACB2";
				}
				// Otherwise clear results and hide the box
				else{
					resultRef.current.style.display="none";
					resultRef.current.innerHTML="";
				}
			});	
		}
	}



	return(
		<>
			<form>
				<label>
					Search:
					<input type='text' ref={searchRef} onChange={handleChange}/>
					<input type='submit' value="Consume!"/>
					<div id="livesarch" ref={resultRef}></div> 
				</label>
			</form>
		</>
	);

}

export default SearchForm;
