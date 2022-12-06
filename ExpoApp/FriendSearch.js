import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import {Link} from 'react-router-native';
import Axios from 'axios';


import {useAuth} from './AuthContext';

export default function FriendSearch({dummy, handleUpdate}){

    const {currentUser} = useAuth();
    
    const [searchText, setSearchText] = useState();
    const [searchResults, setSearchResults] = useState();


    useEffect(()=>{
    }, [searchResults])


    const handleAddFriend = (newFriend) => () => {
        let payload={'user1': currentUser, 'user2': newFriend};
        Axios.post(`http://db8.cse.nd.edu/cse30246/bacND/server/postAddFriend.php`, payload)
        .then((response) => {
            console.log(response.data);
            setSearchText();
            setSearchResults();
            handleUpdate(-1*dummy);
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
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    return(
        <View>
            <Text>
                Friend Search 🤔
            </Text>
            <Text>
                Search for Friends since you have none 
            </Text>

            <TextInput placeholder="Search for friends here!" value={searchText} onChangeText={text => setSearchText(text)}/>
            <Button title="Search for friends!" onPress={handleSubmit}/>

            <FlatList
                style={{flexGrow: 0, maxHeight:"60%"}} 
                data={searchResults}
                renderItem={({item})=>(
                    <View style={{flexDirection: "row", borderColor: "#FFFFFF", borderWidth: "1px"}}>
                        <Text> {item.alias}</Text>
                        <Link to={`../profile/${item.user_id}`}><Text> Profile</Text></Link>
                        <Button title="Add friend" onPress={handleAddFriend(item.user_id)}/>
                    </View>
                )}
                keyExtractor={(item) => {return `${item.user_id}`}}
            />
            
        </View>
    );
}