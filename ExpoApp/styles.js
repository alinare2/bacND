
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#326273',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    navbarContainer: {
        padding: 10,
        paddingTop: 10, 
        marginTop:10,
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
    },

    bigText: {fontSize: 40,
              fontWeight: "bold", 
              color: 'white',
              alignSelf: 'center', 
              backgroundColor: '#5C9EAD',
              borderRadius: 7,
              borderWidth: 5,
              borderColor: '#fff'
            },

    bacLevels: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft:2,
        paddingTop: 3,
        alignSelf: 'left',
        paddingRight: 2
    },

    subtext: {
        fontSize: 8,
        color: 'white',      
        paddingLeft:2,
        paddingTop: 3,
        alignSelf: 'left',
        paddingRight: 2
    
    }


});

export default styles; 