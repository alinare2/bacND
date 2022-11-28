import {View, Text} from 'react-native';
import {Link} from 'react-router-native';


import styles from './styles';

export default function LandingWrapper(){
    return(
        <View style={styles.navbarContainer}>
            <Link to="/" style={styles.navbarLink}>
                <Text> Home </Text>
            </Link>
            <Link to="/login" style={styles.navbarLink}>
                <Text> Login </Text>
            </Link>
            <Link to="/signup" style={styles.navbarLink}>
                <Text> Signup </Text>
            </Link>
        </View>
    );
}