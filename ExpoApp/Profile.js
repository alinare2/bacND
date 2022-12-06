import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import {Link, useParams } from 'react-router-native';

import {useAuth} from './AuthContext';
import styles from './styles';

export default function Profile(){
    const [userInfo, setUserInfo] = useState({alias: "", firstname: "", lastname: "", age: "", weight: "", height: "", sex: ""});
    const [editProfile, setEditProfile] = useState(false);

    const {user_id} = useParams();
    const {currentUser} = useAuth();
    
    useEffect(() => {
        if(currentUser == user_id){
            setEditProfile(true);
        }
        else{
            setEditProfile(false);
        }

        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getUser.php?user_id=${user_id}`).then((response)=>{
            setUserInfo(response.data);
        
        } ).catch((error)=>{
            console.log(error.message);
        })
    }, [user_id])

    // Lot of messy formatting because I was too lazy to put each thing in a list or individual text things
    // Probably will fix later for styling but that's not a job for tonight
    return(
        <View style={{backgroundColor: "#5C9EAD", width: 250, margin: 15, padding: 10, borderRadius:15}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#124263', textAlign:'center'}}>
                {userInfo.alias}'s Profile 
            </Text>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 4,
                marginLeft: 10,
                marginRight: 10
            }}
            />
            <View >
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>First name:</Text><Text style={styles.profileTextRight}>{userInfo.firstname}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>Last name:</Text><Text style={styles.profileTextRight}>{userInfo.lastname}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>Age:</Text><Text style={styles.profileTextRight}>{userInfo.age}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>Weight:</Text><Text style={styles.profileTextRight}>{Math.round(userInfo.weight*2.204*10)/10}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>Height:</Text><Text style={styles.profileTextRight}>{`${Math.floor(userInfo.height/12)}' ${userInfo.height%12}"`}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                <View style={styles.profileRow}>
                    <Text style={styles.profileTextLeft}>Sex:</Text><Text style={styles.profileTextRight}>{userInfo.sex}</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 10, marginRight: 10}}/>
                {editProfile && (
                    <Link to={'../edit_profile'}>
                        <Text style={styles.profileLink}>
                            Edit Profile
                        </Text>
                    </Link>
                )}

                {editProfile && (
                    <Link to={'../delete_profile'}>
                        <Text style={styles.profileLink}>
                            Delete Profile
                        </Text>    
                    </Link>
                )}
            </View>
        </View>
    )
}