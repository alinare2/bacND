import React from 'react';
import {Text} from 'react-native';

import { useAuth } from './AuthContext';

export default function Landing(){
    const {currentUser, isLoggedIn} = useAuth();
    return(
        <Text> 
            Disclaimer: This is app only makes an estimate of your current blood alcohol content and should not be treated as fact
            We estimate your BAC using the Widmark formula. 
        </Text>
    
    );
}