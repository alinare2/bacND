import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { useNavigate } from 'react-router-native';

import {useAuth} from './AuthContext';


export default function Signup(){
    const nav = useNavigate();
    const {setIsLoggedIn, setCurrentUser} = useAuth();
    const [accountDetails, setAccountDetails] = useState({alias: "", password: "", confirm_password: "",
                                                        firstname: "", lastname: "", 
                                                        age: "", height_feet: "", height_inch: "", 
                                                        weight: "", sex: ""});

    function handleOnPress(e){
        e.preventDefault();

        // Placeholder for now until I find a way to make radio buttons
        setAccountDetails({...accountDetails, sex: "F"});
    
        // Check for any empty stuff here please
        if(Object.values(accountDetails).reduce((acc, value) => {return (value === "") || acc}, false)){
            // Print a warning like "Please fill in all values"
           console.log("blank field") ;
        }
        // Check for massing passwords
        else if (accountDetails.password !== accountDetails.confirm_password){
            // Print a warning like "Password mismatch"
            console.log("mismatched passwords")
        }
        else{
            console.log("Attempting signup"); 
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postSignup.php", accountDetails).then((response) => {
                console.log(response.data);
                setCurrentUser(response.data.user_id);
                setIsLoggedIn(true);
                nav("/");

            }).catch((error)=>{
                console.log(error);
            });
        }
    }


    return(
        <View style={{backgroundColor: '#EEEEEE'}} >
            <TextInput 
                placeholder="Username" 
                onChangeText={text => setAccountDetails({...accountDetails, alias: text})} 
                value={accountDetails.alias}
            />
            <TextInput 
                placeholder="Password" 
                onChangeText={text => setAccountDetails({...accountDetails, password: text})} 
                value={accountDetails.password}
                secureTextEntry={true}
            />
            <TextInput 
                placeholder='Confirm Password' 
                onChangeText={text=>setAccountDetails({...accountDetails, confirm_password: text})} 
                value={accountDetails.confirm_password}
                secureTextEntry={true}
            />
            <TextInput 
                placeholder='First Name' 
                onChangeText={text=>setAccountDetails({...accountDetails, firstname: text})} 
                value={accountDetails.firstname} 
            />
            <TextInput 
                placeholder='Last Name' 
                onChangeText={text=>setAccountDetails({...accountDetails, lastname: text})} 
                value={accountDetails.lastname} 
            />
            <TextInput 
                placeholder='Age'
                onChangeText={text=>setAccountDetails({...accountDetails, age: text})} 
                value={accountDetails.age}
                keyboardType="numeric"
            />
            <TextInput 
                placeholder='Height (ft)' 
                onChangeText={text=>setAccountDetails({...accountDetails, height_feet: text })} 
                value={accountDetails.feet}
                keyboardType="numeric"
            /> 
            <TextInput 
                placeholder='Height (inch)' 
                onChangeText={text =>setAccountDetails({...accountDetails, height_inch:text})} 
                value={accountDetails.inch}
                keyboardType="numeric"
            />
            <TextInput 
                placeholder='Weight (lbs)' 
                onChangeText={text=>setAccountDetails({...accountDetails, weight: text})} 
                value={accountDetails.weight} 
                keyboardType="numeric"
            />
            {/* <Text> Find somethign for a radio button for sex</Text> */}
            <TextInput 
                placeholder='Gender (M/F)' 
                onChangeText={text=>setAccountDetails({...accountDetails, sex: text})} 
                value={accountDetails.sex} 
            /> 
            <Button 
                title="Sign up!" 
                onPress={handleOnPress}
            />
        </View>
    );
}