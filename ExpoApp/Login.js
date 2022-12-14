import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { TextInput, View, Text, Button} from 'react-native';
import { useNavigate } from 'react-router-native';

import { useAuth } from './AuthContext';
import styles from './styles';

export default function Login(){
    const {setCurrentUser, setIsLoggedIn} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();
    function handleOnPress(e){

        e.preventDefault();
        const request = {username: username,
                        password: password};
        Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postLogin.php", request).then((response) => {
            console.log("wow you logged in or something!");
            const user_id = response.data;
            console.log(user_id);
            if(user_id > 0){
                setCurrentUser(user_id);
                setIsLoggedIn(true);
                nav("/");
            }
            else{
                console.log("YOU DONE MESSED UP!");
            }
            // Do something with the data silly!

        }).catch((error) => {
            console.log(error);

        });

    }



    return(
        <>
            <View style={{backgroundColor: '#EEEEEE', padding:0, margin: 20, width:300}} >
                <View style={{backgroundColor:'#DDDDDD'}}>
                    <TextInput autoCapitalize='none' style={styles.formInput} onChangeText={text => setUsername(text)} value={username} placeholder="Username"/>
                    <TextInput style={styles.formInput} onChangeText={text => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true}/>
                </View>
                <Button style={{fontSize:30}} onPress={handleOnPress} title="Log In"/>
            </View>
        </>
    );

}