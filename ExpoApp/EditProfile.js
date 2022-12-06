import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, TouchableWithoutFeedback, ScrollView, Keyboard} from 'react-native';
import Axios from 'axios';
import { useNavigate } from 'react-router-native';
import RadioForm from 'react-native-simple-radio-button';

import { useAuth } from './AuthContext';
import styles from './styles.js';

export default function EditProfile(){
  
    const nav = useNavigate();

    const [userInfo, setUserInfo] = useState({alias: "", firstname: "", lastname: "", age: "", feet: "", inch: "", weight: "", sex: ""});

    const {currentUser} = useAuth();
    // const [initRadio, setInitRadio] = useState(0);
    var initRadio = 0;
    var radio_props = [
        {label: 'Male', value: 'M' },
        {label: 'Female', value: 'F' }
        ];
    
    

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
            nav(`../profile/${currentUser}`);

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
            if(x.sex == 'F') {
                console.log('setting init to 1')
                initRadio = 1;
            }
            else if(x.sex == 'M') {
                console.log('setting init to 0')
                initRadio = 0;
            }
            setUserInfo({...x, 'feet': feet, 'inch': inch, 'weight': w});
        })
        .catch((error)=>{
            console.log(error);
        })

    }, []);

    return (userInfo &&
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{backgroundColor: '#EEEEEE', padding:0, margin: 20, width:300}}>
                <ScrollView style={{backgroundColor: "#DDDDDD", height:250}} contentContainerStyle={{flexGrow:100}}>
                    <View style={{}}>
                        <Text style={{marginLeft:15, fontWeight:'700', paddingTop:10}}> First Name </Text>
                        <TextInput 
                            style={styles.formInput}
                            defaultValue={userInfo.firstname}
                            onChangeText={text => setUserInfo({...userInfo, 'firstname': text})}
                        />
                        <Text style={{marginLeft:15, fontWeight:'700'}}> Last Name </Text>
                        <TextInput
                            style={styles.formInput}
                            defaultValue={userInfo.lastname}
                            onChangeText={text => setUserInfo({...userInfo, 'lastname': text})}
                        />
                        <Text style={{marginLeft:15, fontWeight:'700'}}> Age </Text>
                        <TextInput 
                            style={styles.formInput}
                            defaultValue={userInfo.age.toString()}
                            onChangeText={text => setUserInfo({...userInfo, 'age': text})}
                            keyboardType='numeric'
                        />

                        <Text style={{marginLeft:15, fontWeight:'700'}}> Height (ft) </Text>
                        <TextInput 
                            style={styles.formInput}
                            defaultValue={userInfo.feet.toString()}
                            onChangeText={text => setUserInfo({...userInfo, 'feet': text})}    
                            keyboardType='numeric'
                        />
                        <Text style={{marginLeft:15, fontWeight:'700'}}> Height (inch)</Text>
                        <TextInput 
                            style={styles.formInput}
                            defaultValue={userInfo.inch.toString()}
                            onChangeText={text => setUserInfo({...userInfo, 'inch': text})}    
                            keyboardType='numeric'
                        />
                        <Text style={{marginLeft:15, fontWeight:'700'}}> Weight (lbs) </Text>
                        <TextInput 
                            style={styles.formInput}
                            defaultValue={userInfo.weight.toString()}
                            onChangeText={text => setUserInfo({...userInfo, 'weight': text})}
                            keyboardType='numeric'
                        />
                    </View>
                </ScrollView>
                <Button title="Submit" onPress={handleSubmit}/> 
            </View>
        </TouchableWithoutFeedback>
        // <View>
        //     <Text>
        //         {userInfo.alias + "'s account details"}
        //     </Text>
        //     <Text> First Name</Text>
        //     <TextInput
        //         defaultValue={userInfo.firstname}
        //         onChangeText={text => setUserInfo({...userInfo, 'firstname': text})}
        //     />
        //     <Text> Last Name </Text>
        //     <TextInput
        //         defaultValue={userInfo.lastname}
        //         onChangeText={text => setUserInfo({...userInfo, 'lastname': text})}
        //     />
        //     <Text> Age </Text>
        //     <TextInput 
        //         defaultValue={userInfo.age.toString()}
        //         onChangeText={text => setUserInfo({...userInfo, 'age': text})}
        //         keyboardType='numeric'
        //     />

        //     <Text> Height (ft) </Text>
        //     <TextInput 
        //         defaultValue={userInfo.feet.toString()}
        //         onChangeText={text => setUserInfo({...userInfo, 'feet': text})}    
        //         keyboardType='numeric'
        //     />
        //     <Text> Height (inch)</Text>
        //     <TextInput 
        //         defaultValue={userInfo.inch.toString()}
        //         onChangeText={text => setUserInfo({...userInfo, 'inch': text})}    
        //         keyboardType='numeric'
        //     />
        //     <Text> Weight (lbs) </Text>
        //     <TextInput 
        //         defaultValue={userInfo.weight.toString()}
        //         onChangeText={text => setUserInfo({...userInfo, 'weight': text})}
        //         keyboardType='numeric'
        //     />

        //     <Text> Sex </Text>
        //     <Text> Sex</Text>
        //     <Button title="Submit" onPress={handleSubmit}/> 
        // </View>
    )
}