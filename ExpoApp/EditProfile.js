import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Axios from 'axios';
import { useNavigate } from 'react-router-native';

import { useAuth } from './AuthContext';

export default function EditProfile(){
  
    const nav = useNavigate();

    const [userInfo, setUserInfo] = useState({alias: "", firstname: "", lastname: "", age: "", feet: "", inch: "", weight: "", sex: ""});

    const {currentUser} = useAuth();
    
    

    function handleSubmit(e){
        e.preventDefault();
        let payload = userInfo;
        let [height, weight] = [userInfo.feet * 12 + userInfo.inch, userInfo.weight/2.2046];
        delete payload.inch;
        delete payload.feet;
        payload = {...payload, 'height': height, 'weight': weight, 'user_id': currentUser};
        console.log(payload);

        Axios.post(`http://db8.cse.nd.edu/cse30246/bacND/server/postEditUser.php`, payload)
        .then((response) =>{ 
            // DO something with the response
            nav(`../profile/${currentUser}`)

        })
        .catch((error) =>{
            console.log(error);
        });
    }


    useEffect(()=>{
        
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUser.php?user_id=${currentUser}`)
        .then((response)=>{
            //Fill in the stuff
            let x = response.data
            let [feet, inch, w] = [Math.floor(x.height/12), x.height % 12, Math.round(x.weight*2.2046)];
            delete x.height;
            setUserInfo({...x, 'feet': feet, 'inch': inch, 'weight': w});
        })
        .catch((error)=>{
            console.log(error);
        })

    }, []);

    return (
        <View>
            <Text>
                {userInfo.alias + "'s account details"}
            </Text>
            <TextInput
                defaultValue={userInfo.firstname}
                onChangeText={text => setUserInfo({...userInfo, 'firstname': text})}
            />
            <TextInput
                defaultValue={userInfo.lastname}
                onChangeText={text => setUserInfo({...userInfo, 'lastname': text})}
            />
            <TextInput 
                defaultValue={userInfo.age.toString()}
                onChangeText={text => setUserInfo({...userInfo, 'age': text})}
                keyboardType='numeric'
            />
            <TextInput 
                defaultValue={userInfo.feet.toString()}
                onChangeText={text => setUserInfo({...userInfo, 'feet': text})}    
                keyboardType='numeric'
            />
            <TextInput 
                defaultValue={userInfo.inch.toString()}
                onChangeText={text => setUserInfo({...userInfo, 'inch': text})}    
                keyboardType='numeric'
            />
            <TextInput 
                defaultValue={userInfo.weight.toString()}
                onChangeText={text => setUserInfo({...userInfo, 'weight': text})}
                keyboardType='numeric'
            />
            <Text> Sex</Text>
            <Button title="Submit" onPress={handleSubmit}/> 
        </View>
    )
}