import React from 'react';
import {View, Text, Button, MaskedViewBase} from 'react-native';
import Axios from 'axios';
import {useNavigate} from 'react-router-native';

import { useAuth } from './AuthContext';

export default function DeleteProfile(){

    const {currentUser, setCurrentUser, setIsLoggedIn} = useAuth();

    const nav = useNavigate();

    function handleDelete(e){
    
        let payload = {'user_id' : currentUser}
        Axios.post(`http://db8.cse.nd.edu/cse30246/server/bacND/postDeleteAccount.php`, payload)
        .then((response)=>{
            setCurrentUser(-1);
            setIsLoggedIn(false); 
            nav("/");
        })
        .catch((error)=>{
            console.log(error);
        });
    
    }

    return (
        <View>
            <Text> Are you sure you want to delete your account?</Text>
            <Button title="Yes" onPress={handleDelete}/>
            <Button title="Oh no. No, no, no, no, no, no, no! Wait, wait, wait, wait, hey. Wait, wait, wait, wait!" onPress={nav("/")}/>
        </View>
    );
}