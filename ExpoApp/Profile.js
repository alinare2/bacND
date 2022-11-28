import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import { useParams } from 'react-router-native';

import {useAuth} from './AuthContext';

export default function Profile(){
    const [userInfo, setUserInfo] = useState({alias: "", firstname: "", lastname: "", age: "", weight: "", height: "", sex: ""});

    const {user_id} = useParams();

    useEffect(() => {
        console.log(user_id); 
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUser.php?user_id=${user_id}`).then((response)=>{
            setUserInfo(response.data);
        
        } ).catch((error)=>{
            console.log(error.message);
        })
    }, [user_id])

    // Lot of messy formatting because I was too lazy to put each thing in a list or individual text things
    // Probably will fix later for styling but that's not a job for tonight
    return(
        <View>
            <Text>
                {"\n"}{userInfo.alias}'s Profile 
            </Text>
            <View>
                <Text>
                    First name:     {userInfo.firstname}{"\n"}
                    Last name:      {userInfo.lastname}{"\n"}
                    Age:            {userInfo.age}{"\n"}
                    Weight (lbs):   {Math.round(userInfo.weight*2.204)}{"\n"}
                    Height:         {`${Math.floor(userInfo.height/12)}' ${userInfo.height%12}"`}{"\n"}
                    Sex:            {userInfo.sex}{"\n"}
                </Text>
            </View>
        </View>
    )
}