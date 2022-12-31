import React, {useState} from 'react';
import {useAuth} from './AuthContext';

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {login} = useAuth();
    
    function handleOnChange(e){
        switch(e.target.id){
            case 'username':
                setUsername(e.target.value);
                break;
                
            case 'password':
                setPassword(e.target.value);
                break;            
            default:
                break;
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        // do the thing
        const res = login(username, password);
        console.log(res);
    }
    
    return (
            <div>
                <h4> Log In </h4>
                <form>
                    <input type='text' id='username' placeholder='Username' onChange={handleOnChange}/> <br/>
                    <input type='password' id='password' placeholder='Password' onChange={handleOnChange}/> <br/>
                    <input type='submit' value='Log In' onClick={handleSubmit}/>
                </form>
            </div>
    );
}