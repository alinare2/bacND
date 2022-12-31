import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Axios from 'axios';

import {useAuth} from './AuthContext';

export default function Feed(){
    const {currentUser} = useAuth();

    const [consumes, setConsumes] = useState();

    useEffect(()=>{

        // Probably need to do some checks here
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getConsumes.php?user_id=${currentUser}`).then((response) => {
            setConsumes(response.data);

        }).catch((error)=>{
            console.log(error);
        });

    }, []);

    let parseDate = (dateString) => {
        let date = new Date(Date.parse(dateString))
        var month=date.getMonth()+1;
        var day=date.getDay();
        var hours=date.getHours();
        var minutes = date.getMinutes()
        var AMPM = '';
        if(hours == 0) {
            hours = 12;
            AMPM = 'AM';
        }
        else if (hours > 12) {
            hours = hours - 12;
            AMPM = 'PM';
        }
        else {
            AMPM = 'AM';
        }
        if(minutes < 10) {
            minutes = `0${minutes}`;
        }
        return(`${month}/${day} ${hours}:${minutes} ${AMPM}`);
    }


    return(
        <View style={{marginTop:10}}>
            <FlatList
                data={consumes}
                renderItem={({item}) =>(
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text numberOfLines={1} style={{borderColor:'#AAAAAA', padding:2, fontWeight:'600', borderStyle:'solid', borderWidth:2, width:70, color:'white'}}>{item.user === currentUser ? "You" : item.alias}:</Text>
                        <Text numberOfLines={1} style={{borderColor:'#AAAAAA', padding:2, fontWeight:'600', borderStyle:'solid', borderWidth:2, width:180, color:'white'}}>{item.container} of {item.product_name}</Text>
                        <Text numberOfLines={1} style={{borderColor:'#AAAAAA', padding:2, fontWeight:'600', borderStyle:'solid', borderWidth:2, width:120, color:'white'}}>{parseDate(item.time)}</Text>
                    </View>
                )}
                keyExtractor={(item) => {return item.consumes_id}}
                style={{flexGrow:0}}
                ListEmptyComponent={<Text> You haven't had anything to drink today </Text>}
            />
        </View>
    );

}