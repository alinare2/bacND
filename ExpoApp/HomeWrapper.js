import {View, Text, Image} from 'react-native';
import {Link} from 'react-router-native';

import { useAuth } from './AuthContext';

import styles from './styles';

export default function HomeWrapper(){
    const {currentUser} = useAuth()

    return(
        <View style={styles.navbarContainer}>
            <Link to = "/" style={styles.navbarLink}>
                <Image source={require('./src/bacndlogo.png')} style={styles.logoLink}/>
            </Link>
            <Link to={`/profile/${currentUser}`} style={styles.navbarLink}>
                <Text>My Profile </Text>
            </Link>
            <Link to="/consume" style={styles.navbarLink}>
                <Text>CONSUME 😋 </Text>
            </Link>
            <Link to ="/friends" style={styles.navbarLink}>
                <Text>Fren 🙂</Text>
            </Link>
            <Link to="/logout" style={styles.navbarLink}>
                <Text>Log out</Text>                
            </Link>
        </View>
    );
}