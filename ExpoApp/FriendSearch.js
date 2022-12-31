import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import {Link, redirect} from 'react-router-native';
import Axios from 'axios';
import styles from './styles.js';
import { Keyboard } from 'react-native';
import { LogBox } from 'react-native';


import {useAuth} from './AuthContext';

export default function FriendSearch({dummy, handleUpdate}){

    const {currentUser} = useAuth();
    
    const [searchText, setSearchText] = useState();
    const [searchResults, setSearchResults] = useState();


    useEffect(()=>{
    }, [searchResults])

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    const handleAddFriend = (newFriend) => () => {
        let payload={'user1': currentUser, 'user2': newFriend};
        Axios.post(`http://db8.cse.nd.edu/cse30246/bacND/server/postAddFriend.php`, payload)
        .then((response) => {
            console.log(response.data);
            setSearchText();
            setSearchResults();
            handleUpdate(-1*dummy);
            redirect('/')
        })
        .catch((error) => {
            console.log(error);
        });
    }

    function handleSubmit(e){
        if(searchText === "") return;
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUserSearch.php?alias=${searchText}`)
        .then((response) =>{
            setSearchResults(response.data);
            console.log(searchResults[0]);
            Keyboard.dismiss();
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    return(
        <View style={{alignItems:'center', backgroundColor:'#124263', padding:10, marginTop:10}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'600', marginBottom:10}}>
                Search for Friends! 
            </Text>

            <TextInput style={{fontSize:20, backgroundColor:'white', padding:3, margin: 3, width:238}} placeholder="Enter a friend's username!" value={searchText} onChangeText={text => setSearchText(text)}/>
            <View style={{backgroundColor:'#BBBBBB', width:238, marginTop:10, marginBottom:20}}>
                <Button title="Search!" onPress={handleSubmit}/>
            </View>

            <FlatList
                style={{flexGrow: 0}} 
                data={searchResults}
                renderItem={({item})=>(
                    <View style={{flexDirection: "row", borderColor: "#FFFFFF", borderWidth: "1px", width:238, justifyContent:'space-between', backgroundColor:'#5C9EAD'}}>
                        <View style={{justifyContent:'center'}}><Text style={{fontSize:20, fontWeight:'bold', color:'#022243', textAlign:'left', width:130}}> {item.alias}</Text></View>
                        <View style={{backgroundColor:'#CCCCCC'}}>
                            <Button title="Add friend" onPress={handleAddFriend(item.user_id)}/>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => {return `${item.user_id}`}}
            />
            
        </View>
    );
}