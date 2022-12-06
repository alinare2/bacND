import {View, Text, Image} from 'react-native';
import {Link} from 'react-router-native';

import styles from './styles';

export default function LandingWrapper(){
    return(
        <View style={styles.container}>
            <Link to="/" style={styles.bigLogo}>
                <Image source={require('./src/bacndlogo-2.png')} style={styles.logoLink}/>
            </Link>
                <View style={styles.navbarContainer}>
                    {/* <Link to="/" style={styles.navbarLink}>
                        <Image source={require('./src/bacndlogo-2.png')} style={styles.logoLink}/>
                    </Link> */}
                    <Link to="/login" style={styles.navbarLink}>
                        <Text style={styles.navText}> Login </Text>
                    </Link>
                    <Link to="/signup" style={styles.navbarLink}>
                    <Text style={styles.navText}> Signup </Text>
                    </Link>
                </View>
        </View>
    );
}