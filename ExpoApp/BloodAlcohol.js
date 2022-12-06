import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import {useAuth} from './AuthContext';
import styles from './styles';

export default function BloodAlcohol(){
    const {currentUser} = useAuth();

    const [bac, setBAC] = useState(0);

    useEffect(()=>{
        // Probably check something here maybe? 
        Axios.get(`http://db8.cse.nd.edu/cse30246/bacND/server/getBAC.php?user_id=${currentUser}`)
        .then((response) =>{
            setBAC(response.data.toFixed(2))

        }).catch((error) => {
            console.log(error);
        });


    }, []);


    return (
        <View>
            <Text style={styles.statement}>Your BAC is approximately</Text>
            <Text style={styles.bigText}> {bac}% </Text>
            <View style={{marginLeft:6, marginRight:6, borderStyle:'solid', borderColor:'#AAAAAA', borderWidth:4, padding:4, marginTop:10}}>
                <Text style={(bac > 0 && bac <= 0.05) ? {...styles.bacLevels, color:'#DD0000'} : styles.bacLevels}>0% - 0.05%</Text>
                <Text style={styles.subtext}>Slight buzz, but typically no observable effects</Text>
            </View>
            <View style={{marginLeft:6, marginRight:6, borderStyle:'solid', borderColor:'#AAAAAA', borderWidth:4, padding:4, borderTopWidth:0}}>
                <Text style={(bac > 0.05 && bac <= 0.08) ? {...styles.bacLevels, color:'#DD0000'} : styles.bacLevels}>0.05% - 0.08%</Text>
                <Text style={styles.subtext}>A slight impairment in judgement and coordination</Text>
            </View>
            <View style={{marginLeft:6, marginRight:6, borderStyle:'solid', borderColor:'#AAAAAA', borderWidth:4, padding:4, borderTopWidth:0}}>
                <Text style={(bac > 0.08 && bac <= 0.15) ? {...styles.bacLevels, color:'#DD0000'} : styles.bacLevels}>0.08% - 0.15%</Text>
                <Text style={styles.subtext}>At legal limit! Proceed with caution as effects become more apparent and mood starts to swing</Text>
            </View>
            <View style={{marginLeft:6, marginRight:6, borderStyle:'solid', borderColor:'#AAAAAA', borderWidth:4, padding:4, borderTopWidth:0}}>
                <Text style={(bac > 0.15 && bac <= 0.30) ? {...styles.bacLevels, color:'#DD0000'} : styles.bacLevels}>0.15% - 0.30%</Text>
                <Text style={styles.subtext}>Evident loss of motor functions, significant mood change, erratic behaviors, risk of alcohol poisoning </Text>
            </View>
            <View style={{marginLeft:6, marginRight:6, borderStyle:'solid', borderColor:'#AAAAAA', borderWidth:4, padding:4, borderTopWidth:0}}>
                <Text style={(bac > 0.30 && bac <= 0.40) ? {...styles.bacLevels, color:'#DD0000'} : styles.bacLevels}>0.30% - 0.40%</Text>
                <Text style={styles.subtext}>Very concerning. Please stop drinking. Risk of unconsciousness/coma/death</Text>
            </View>
        </View>
    );
}

// 0.00-0.05%: At this level, there are no observable effects.

// 0.05-0.08%: At this level, an individual may experience a slight impairment in judgment and coordination.

// 0.08-0.1%: At this level, an individual may experience a significant impairment in judgment and coordination.

// 0.1-0.2%: At this level, an individual may experience a significant impairment in judgment, coordination, and balance.

// 0.2-0.3%: At this level, an individual may experience a loss of motor coordination and balance, as well as heightened mood changes.

// 0.3-0.4%: At this level, an individual may experience a loss of consciousness, and possible coma.

// 0.4% and higher: At this level, an individual may experience death.