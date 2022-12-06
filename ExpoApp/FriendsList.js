import React, {useEffect, useState} from 'react';
import {TouchableHighlight, FlatList, Text, View } from "react-native";
import {Link} from 'react-router-native';
import Axios from 'axios';

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

    }, [setRerender]);

    // Maybe turn each element in the list to a touchable that links to their profile with their user_id

    return (
        <View>
            <Text>
                Friends  
            </Text>

            <FlatList
                data={friends}
                renderItem={({item})=> (
                    <TouchableHighlight>
                        <Link to={`/profile/${item.friend_id}`}>
                            <Text> · {item.alias}</Text>
                        </Link>
                    </TouchableHighlight>
                )}
                keyExtractor={(item) => {return `${item.friend_id}`}}
                style={{flexGrow:0}}
            />

            <FriendSearch dummy={rerender} handleUpdate={setRerender}/>
        </View>
    );
}