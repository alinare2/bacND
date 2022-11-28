import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import {useAuth} from './AuthContext';

export default function BloodAlcohol(){
    const {currentUser} = useAuth();

    useEffect(()=>{
        // Probably check something here maybe? 
        


    }, []);


    return (
        <View>
            <Text> You are fucking WASTED BUDDY </Text>
        </View>
    );
}