import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import { useAuth } from './AuthContext';

export default function EditProfile(){
   
    const {currentUser} = useAuth();
    
    useEffect(()=>{
        
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUser.php?user_id=${currentUser}`)
        .then((response)=>{
            //Fill in the stuff 
        })
        .catch((error)=>{
            console.log(error);
        })

    }, []);

    return (
        <View>
            <Text>
                I hate my life
            </Text>
        </View>
    )
}