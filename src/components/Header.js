import React from 'react';
import {Text,StyleSheet,View} from 'react-native';


const Header=(props)=>{
    return (
        <View style={styles.ViewStyle}>
    <Text style={styles.TextStyle}>{props.headerText}</Text>
    
        </View>
        );
};

const styles=StyleSheet.create({
    TextStyle:{
        fontSize:20
    },
    ViewStyle:{
        
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:40,
        height:80,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
        
    }
})

export default Header;