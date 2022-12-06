import React, {useEffect, useState} from 'react';
import {TouchableHighlight, FlatList, Text, View, ScrollView } from "react-native";
import {Link} from 'react-router-native';
import Axios from 'axios';
import styles from './styles.js';

import FriendSearch from './FriendSearch';
import { useAuth } from './AuthContext';

export default function FriendsList(){
    const {currentUser} = useAuth();
    const [friends, setFriends] = useState();
    const [rerender, setRerender] = useState();

    useEffect(()=>{
        // Probably need to do some checks or something idk
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getFriends.php?user_id=${currentUser}`).then((response)=>{
            setFriends(response.data);
        }).catch((error)=>{
            console.log(error);
        });

    }, [rerender]);

    // Maybe turn each element in the list to a touchable that links to their profile with their user_id

    return (
        <ScrollView style={{width:400}} contentContainerStyle={{flexGrow:1, alignItems:'center'}}>
            <View style={{alignItems:'center', backgroundColor:'#124263', padding:10, marginTop:10}}>
                <Text style={{color:'white', fontSize:20, fontWeight:'600', marginBottom:10}}>
                    Friends  
                </Text>

                <FlatList
                    data={friends}
                    renderItem={({item})=> (
                        <View style={{flexDirection: "row", borderColor: "#FFFFFF", borderWidth: "1px", width:238, justifyContent:'space-between', backgroundColor:'#5C9EAD'}}>
                            <View style={{justifyContent:'center'}}><Text style={{fontSize:20, fontWeight:'bold', color:'#022243', textAlign:'left', width:130}}> {item.alias}</Text></View>
                            <View style={{backgroundColor:'#CCCCCC'}}>
                                <TouchableHighlight>
                                    <Link to={`/profile/${item.friend_id}`}>
                                        <Text style={{color:'#0088FF', fontSize:20, padding:3}}>Profile</Text>
                                    </Link>
                                </TouchableHighlight>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => {return `${item.friend_id}`}}
                    style={{flexGrow:0}}
                />
            </View>

            <FriendSearch dummy={rerender} handleUpdate={setRerender}/>
        </ScrollView>
    );
}