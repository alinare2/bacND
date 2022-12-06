
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#326273',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    navbarContainer: {
        padding: 10,
        paddingTop: 40, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#5C9EAD'
    },

    navbarLink: {
        flex: 1,
        alignItems: "center",
    },

    logoLink: {
        flex: 1,
        resizeMode: 'contain'

    },

    drinkSearch: {
        width: '90%',
        backgroundColor:'#326273'
    },

    bigLogo: {
        height: 100,
        width: 'auto',
    },
    
    navText: {
        fontSize: 30,
        paddingTop: 1
    }


});

export default styles; 