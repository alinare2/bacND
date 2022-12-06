import React from 'react';
import {View, Text, Button} from 'react-native';
import Axios from 'axios';
import {useNavigate} from 'react-router-native';


export default function DeleteProfile(){

    function handleDelete(e){
        console.log("AHHHHHHHH");
    }

    return (
        <View>
            <Text> Are you sure you want to delete your account?</Text>
            <Button title="yes" onPress={handleDelete}/>
        </View>
    );
}