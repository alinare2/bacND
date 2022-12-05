import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import {useAuth} from './AuthContext';

export default function BloodAlcohol(){
    const {currentUser} = useAuth();

    const [bac, setBAC] = useState(0);

    useEffect(()=>{
        // Probably check something here maybe? 
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getBAC.php?user_id=${currentUser}`)
        .then((response) =>{
            setBAC(Number(response.data.toFixed(2)))

        }).catch((error) => {
            console.log(error);
        });


    }, []);


    return (
        <View>
            <Text> Your BAC is approximately {bac}%</Text>
            <Text> Insert something here about your levels (e.g tipsy, drunk, don't drive, drink some water, etc.) </Text>
        </View>
    );
}