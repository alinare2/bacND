import React, { useEffect } from 'react';
import {View, Text, Button, MaskedViewBase, Pressable} from 'react-native';
import Axios from 'axios';
import {Link, redirect} from 'react-router-native';

import { useAuth } from './AuthContext';
import styles from './styles.js';

export default function DeleteProfile(){

    const {currentUser, setCurrentUser, setIsLoggedIn} = useAuth();

    useEffect(()=>{}, [currentUser]);

    function handleDelete(e){
    
        let payload = {'user_id' : currentUser}
        Axios.post(`http://db8.cse.nd.edu/cse30246/bacND/server/postDeleteAccount.php`, payload)
        .then((response)=>{
            setCurrentUser(-1);
            setIsLoggedIn(false); 
            redirect("/");
        })
        .catch((error)=>{
            console.log(error);
        });
    
    }

    return (
        <View style={{backgroundColor: "#5C9EAD", width: 250, margin: 15, padding: 10, borderRadius:15}}>
            <Text> Are you sure you want to delete your account?</Text>
            <Pressable  onPressIn={handleDelete}>
                <Text style={styles.profileLink}> Yes </Text>
            </Pressable>            
            <Link to="/"> 
                <Text style={{...styles.profileLink, backgroundColor:'#AA0000', color:'black'}}> No </Text>
            </Link>
        </View>
    );
}