import React from 'react';
import {View,StyleSheet,Text} from 'react-native';


const CardSection = (props)=>{
    console.log(props.children);
    
    return (
        <View style={styles.containerStyle}> 
            {props.children}
        </View>
    );
};


const styles=StyleSheet.create({
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
});


export default CardSection;