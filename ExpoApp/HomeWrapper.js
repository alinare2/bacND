import {View, Text, Image} from 'react-native';
import {Link} from 'react-router-native';

import { useAuth } from './AuthContext';

import styles from './styles';

export default function HomeWrapper(){
    const {currentUser} = useAuth()

    return(
        <View style={styles.container}>
            <Link to="/" style={styles.bigLogo}>
                <Image source={require('./src/bacndlogo-2.png')} style={styles.logoLink}/>
            </Link>
            <View style={styles.navbarContainer}>
                <Link to={`/profile/${currentUser}`} style={styles.navbarLink}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}} >My Profile</Text>
                </Link>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>|</Text>
                <Link to="/consume" style={styles.navbarLink}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>Consume</Text>
                </Link>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>|</Text>
                <Link to ="/friends" style={styles.navbarLink}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>Friends 🙂</Text>
                </Link>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>|</Text>
                <Link to="/logout" style={styles.navbarLink}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#124263'}}>Log Out</Text>                
                </Link>
            </View>
            </View>
    );
}