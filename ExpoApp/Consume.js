import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useNavigate } from 'react-router-native';

import { useAuth } from './AuthContext';
import styles from './styles';


export default function Consume(){
    const {currentUser} = useAuth();
    const nav = useNavigate();

    const [currentText, setCurrentText] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);
    const [drink, setDrink] = useState(-1);


    const temp_volume = 354.882; // This is 12 oz or 354.882 mL
    const temp_container = "12oz can"; // This can be shot, 12 oz, 16 oz, 24 oz, 32 oz, solo cup, etc. 

    function handleDropSubmit(){
        console.log(drink);
        const request = {drink_id : drink, user_id : currentUser, volume: temp_volume, container: temp_container};
        if(drink > 0){
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postConsumes.php", request).then((response)=>{
                console.log(response.data);

                nav("/");
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    function handleManualSubmit(){
        console.log(drink);
        const request = {drink_id : drink, user_id : currentUser, volume: temp_volume, container: temp_container};
        if(drink > 0){
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postConsumes.php", request).then((response)=>{
                console.log(response.data);

                nav("/");
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    const handleOnPress = (drink) => () => {
        setDrink(drink.id);
        setCurrentText(drink.product);
    }
    
        
    Axios.interceptors.request.use(request =>{
            setLoading(true);
            return request;
        
    }) ;   
    function handleOnChangeText(text){
        setDrink(-1);
        if(searchTimer){       
            clearTimeout(searchTimer);
        }
        setCurrentText(text);

        setSearchTimer(setTimeout(() => {
            if(text === ""){
                setResults([]);
            }
            else{
                Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getDrink.php?drink_name=${text}`).then((response)=>{

                    const drinkList = response.data;
                    setLoading(false);
                    setResults(response.data);

                }).catch((error)=>{
                    console.log(error);
                });
            }
        }, 500), );
    }


    let thing;
    if(loading){
        thing = <ActivityIndicator/>
    }
    else{
        thing =  (        
        <FlatList 
            data={results}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={handleOnPress({id: item.drink_id, product: item.product_name} )}>
                    <Text> {item.product_name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.drink_id}
            style={{flexGrow:0, maxHeight:'60%'}}
        />
        );
    }

    return(
        <View style={{alignItems:'center'}}>
            <Text>
                <Text style={{fontSize:45, color:'white', fontWeight:'bold', backgroundColor: '#5C9EAD', padding:500}}>
                ----- consume -----
    
                </Text>
            </Text>
            <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> 
                Search for drink
            </Text> 
            <View style={styles.drinkSearch}>
                <TextInput placeholder="Search for Drink" onChangeText={text => handleOnChangeText(text)} value={currentText}/>
                {(drink === -1) && thing} 
                <Text> Insert input to select volumes (in ounces) of drink </Text> 
                <Button title="Consume" onPress={handleDropSubmit}/>
            </View>

            <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> 
                Can't find it? Add it below!
            </Text> 
            <TextInput placeholder="Drink Name" onChangeText={text => setDrink(text)} value={drink}/>

            <Button title="Submit" onPress={handleManualSubmit}/>

        </View>
    );
}