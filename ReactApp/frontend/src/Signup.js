import React, {useState} from 'react';
import {useAuth} from './AuthContext';

export default function Signup(){
    const {signup} = useAuth();

    const [accountDetails, setAccountDetails] = useState({alias: "", password : "", password_confirm: "", 
                                                        firstname: "", lastname: "", age: "", height_feet: "", 
                                                        height_inch: "", weight: "", sex: ""});

    function handleOnChange(e){
        let val = e.target.value;
        // Check which text field is being updated and update each value accordingly         
        switch(e.target.id){
            case 'alias':
                setAccountDetails({...accountDetails, alias: val});
                break;
            case 'password':
                setAccountDetails({...accountDetails, password: val});
                break;
            case 'password_confirm':
                setAccountDetails({...accountDetails, password_confirm: val});
                break;
            case 'firstname':
                setAccountDetails({...accountDetails, firstname: val});
                break;
            case 'lastname':
                setAccountDetails({...accountDetails, lastname: val});
                break;
            case 'age':
                setAccountDetails({...accountDetails, age:val});
                break;
            case 'height_feet':
                setAccountDetails({...accountDetails, height_feet: val});
                break;
            case 'height_inch':
                setAccountDetails({...accountDetails, height_inch: val});
                break;
            case 'weight':
                setAccountDetails({...accountDetails, weight: val});
                break;
            case 'm': case 'f':
                setAccountDetails({...accountDetails, sex: val});
                break;
            default:
                //idk
        }

    }


    function handleOnClick(e){
        e.preventDefault();
        // This is ugly but basically it checks if any of the attributes of accountDetails is ""
        if(Object.values(accountDetails).reduce((acc, val) => {return (val === "") || acc}, false)){
            console.log("HELP");
            // Put error message saying "Please fill out all fields" or something

        }
        else if(accountDetails.password !== accountDetails.password_confirm){
            console.log("Error; password mismatch");
            // Put an error message here informing user that their passwords do not match
        }
        else{
            console.log("Okay lets do it");
            // Probably should add an input that determines if it was created successfully as well as returning a token or something
            signup(accountDetails);
        }
    }

    return(
        <>
            <h4> Sign Up! </h4>
            <form>
                <input type='text' id='alias' placeholder='Username' onChange={handleOnChange}/> <br/>
                <input type='password' id='password' placeholder='Password' onChange={handleOnChange}/> <br/>
                <input type='password' id='password_confirm' placeholder='Confirm Password' onChange={handleOnChange}/> <br/>
                <input type='text' id='firstname' placeholder='First Name' onChange={handleOnChange}/> <br/>
                <input type='text' id='lastname' placeholder='Last Name' onChange={handleOnChange}/> <br/>
                <input type='text' id='age' placeholder='Age' onChange={handleOnChange} /> <br/>
                <input type='text' id='height_feet' placeholder='Height (ft)' onChange={handleOnChange} /> <br/>
                <input type='text' id='height_inch' placeholder='Height (inch)' onChange={handleOnChange}/> <br/>
                <input type='text' id='weight' placeholder='Weight (lbs)' onChange={handleOnChange} /> <br/>
                <input type='radio' id='m' name='sex' value='m' onChange={handleOnChange}/> <label>M</label>
                <input type='radio' id='f' name='sex' value='f' onChange={handleOnChange}/> <label>F</label> <br/>
                <input type='submit' value='Sign Up' onClick={handleOnClick}/>
            </form>
        </>
    );

}