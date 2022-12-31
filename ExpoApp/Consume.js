import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useNavigate } from 'react-router-native';
import SelectDropdown from 'react-native-select-dropdown';
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
    const [containerCheck, setContainerCheck] = useState(true);
    const [drinkCheck, setDrinkCheck] = useState(true)
    const [container, setContainer] = useState("12 oz can");


    // const temp_volume = 354.882; // This is 12 oz or 354.882 mL
    // const temp_container = "12oz can"; // This can be shot, 12 oz, 16 oz, 24 oz, 32 oz, solo cup, etc. 
    const containerOZ = {"12 oz can": 354.2, 
                         "16 oz can": 473.6,
                         "solo cup": 473.6,
                         "1 shot": 44.4};
    const volumeOps = ["12 oz can", "16 oz can", "solo cup", "1 shot"];

    function handleDropSubmit(){
        console.log(drink);
        const request = {drink_id : drink, user_id : currentUser, volume: containerOZ[container], container: container};
        if(drink > 0){
            Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postConsumes.php", request).then((response)=>{
                console.log(response.data);

                nav("/");
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    // function handleManualSubmit(){
    //     console.log(drink);
    //     const request = {drink_id : drink, user_id : currentUser, volume: temp_volume, container: temp_container};
    //     if(drink > 0){
    //         Axios.post("http://db8.cse.nd.edu/cse30246/bacND/server/postConsumes.php", request).then((response)=>{
    //             console.log(response.data);

    //             nav("/");
    //         }).catch((error)=>{
    //             console.log(error);
    //         });
    //     }
    // }

    const handleOnPress = (drink) => () => {
        setDrink(drink.id);
        setCurrentText(drink.product);
        setDrinkCheck(false);
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
                <TouchableOpacity style={{fontSize:20, backgroundColor:'white', padding:3, margin: 3}} onPress={handleOnPress({id: item.drink_id, product: item.product_name} )}>
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
                <Text style={{fontSize:45, color:'white', fontWeight:'bold'}}>
                Consume a Drink
                </Text>
            </Text>
            <View style={styles.drinkSearch}>
                <TextInput style={{fontSize:20, backgroundColor:'white', padding:3, margin: 3}} placeholder="Search for a Drink" onChangeText={text => handleOnChangeText(text)} value={currentText}/>
                {(drink === -1) && thing} 
                <SelectDropdown
                    buttonStyle={{margin: 5}}
                    defaultButtonText={"Select a Container"}
                    data={volumeOps}
                    onSelect={(selectedItem, index) => {
                        setContainerCheck(false);
                        setContainer(selectedItem);
                        console.log(selectedItem, index, containerOZ[selectedItem])
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                />
                <Button title="Consume" onPress={handleDropSubmit} disabled={containerCheck || drinkCheck}/>
            </View>

            {/* <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> 
                Can't find it? Add it below!
            </Text> 
            <TextInput placeholder="Drink Name" onChangeText={text => setDrink(text)} value={drink}/>

            <Button title="Submit" onPress={handleManualSubmit}/> */}

        </View>
    );
}