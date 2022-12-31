import React from 'react';
import {Text} from 'react-native';

import { useAuth } from './AuthContext';

export default function Landing(){
    const {currentUser, isLoggedIn} = useAuth();
    return(
        <>
        <Text style={{fontSize:'40', color:'white', paddingTop:20}}> 
            Disclaimer!
        </Text>
        <Text style={{fontSize:'20', fontWeight:"600", color:'#124263', padding:20, margin: 20, backgroundColor:"#CCCCCC", textAlign:"center"}}>
            This app only makes an estimate of your current blood alcohol content and
            should not be treated as fact, just a reference.
            We estimate your BAC using the Widmark formula. {"\n\n"} Stay safe.
        </Text>
        </>
    
    );
}