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


    return(
        <View>
           
            <FlatList
                data={consumes}
                renderItem={({item}) =>(
                    <Text>You had a {item.container} of {item.product_name} at {item.time}</Text>
                )}
                keyExtractor={(item) => {return item.consumes_id}}
                style={{flexGrow:0}}
                ListEmptyComponent={<Text> You haven't had anything to drink today </Text>}
            />
        </View>
    );

}