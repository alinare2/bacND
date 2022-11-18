import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from './AuthContext';

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const history = useNavigate();
    const {isLoggedIn, login} = useAuth();


    function handleSubmit(e){
        e.preventDefault();
        // do the thing
        login(username, password);
        console.log(isLoggedIn);

        // Should be some condition to determine if the user logged in successfully
        // If they did, then go to "/", otherwise don't do anythign and display an error
        history("/");
        
    }
    
    return (
            <div>
                <h4> Log In </h4>
                <form>
                    <input type='text' id='username' placeholder='Username' onChange={e => setUsername(e.target.value)}/> <br/>
                    <input type='password' id='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/> <br/>
                    <input type='submit' value='Log In' onClick={handleSubmit}/>
                </form>
            </div>
    );
}