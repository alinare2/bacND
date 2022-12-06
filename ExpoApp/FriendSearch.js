import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import Axios from 'axios';



export default function FriendSearch(){


    const [searchText, setSearchText] = useState();

    function onSubmit(e){

        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUserSearch.php?alias=${searchText}`)
        .then((response) =>{

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
            <Button title="Search for friends!" onPress={onSubmit}/>
        </View>
    );
}