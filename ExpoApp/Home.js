import {View, Text, SafeAreaView} from 'react-native';
import { useAuth} from './AuthContext';

import Feed from './Feed';
import BloodAlcohol from './BloodAlcohol';
import styles from './styles';

export default function Home(){
    const {currentUser} = useAuth();
    return(
        <View style={{alignItems:'center'}}>
            <Text> Home user: {currentUser}</Text>
            <BloodAlcohol/>
            <Feed/>
        </View>
    );

}