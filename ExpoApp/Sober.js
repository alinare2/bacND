import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import {useAuth} from './AuthContext';
import styles from './styles';

export default function BloodAlcohol(){
    const {currentUser} = useAuth();

    const [time, setTime] = useState(0);

    useEffect(()=>{
        // Probably check something here maybe? 
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getSober.php?user_id=${currentUser}`)
        .then((response) =>{
            setTime(response.data.toFixed(2))

        }).catch((error) => {
            console.log(error);
        });


    }, []);


    return (
        <View>
            <Text style={styles.statement}> Time until sober (0% BAC):  </Text> 
            <Text style={styles.bigText}> {time} Hours </Text>
        </View>
    );
}