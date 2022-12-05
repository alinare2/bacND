import React from 'react';
import {Text} from 'react-native';

import { useAuth } from './AuthContext';

export default function Landing(){
    const {currentUser, isLoggedIn} = useAuth();
    return(
        <Text style={{fontSize:'40', color:'white', paddingBottom:40}}> 
            Disclaimer! {"\n"}This app only makes an estimate of your current blood alcohol content and
            should not be treated as fact, just a reference.
            We estimate your BAC using the Widmark formula. Stay safe.
        </Text>
    
    );
}