import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useNavigate } from 'react-router-native';

import { useAuth } from './AuthContext';


export default function Consume(){
    const {currentUser} = useAuth();
    const nav = useNavigate();

    const [currentText, setCurrentText] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);
    const [drink, setDrink] = useState(-1);

    function handleSubmit(){
        console.log(drink);
        const request = {drink_id : drink, user_id : currentUser};
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
            style={{flexGrow:0}}
        />
        );
    }

    return(
        <View>
            <Text>
                Consume 😋 {'\n'}
            </Text>
            <View style={{backgroundColor: "#F0F0F0"}}>
                <TextInput placeholder="Search for Drink" onChangeText={text => handleOnChangeText(text)} value={currentText}/>
                {(drink === -1) && thing} 
                <Text> Insert a dropdown here to choose shot, can, tallboy, solo cup, etc </Text> 
                <Button title="Consume" onPress={handleSubmit}/>
            </View>
        </View>
    )
}