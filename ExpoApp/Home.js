import {View, Text, Image, ScrollView} from 'react-native';
import { useAuth} from './AuthContext';
import { useEffect } from 'react';
import Feed from './Feed';
import BloodAlcohol from './BloodAlcohol';
import Sober from './Sober';
import styles from './styles';
import { LogBox } from 'react-native';


export default function Home(){
    const {currentUser} = useAuth();
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return(
        <ScrollView style={{ height:620}} contentContainerStyle={{alignItems:'center', flexGrow:1}}>
            <BloodAlcohol/>
            <Sober/>
            <Feed/>
        </ScrollView>
    );

}