import React from 'react';
import {Text,Image,View,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail=({data})=>{
    
    const {title,artist,thumbnail_image,image,url} =data;
    
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image style={styles.thumbnail_imageStyle} source={{uri:thumbnail_image}}  />
                </View>
                <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri:image}}  />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)} >
                Buy now
                </Button>
            </CardSection>
            
            
        </Card>
    );
};

const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    thumbnail_imageStyle:{
        height:50,
        width:50
    },
   headerTextStyle:{
        fontSize:18   
    },
    thumbnailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
        
    }
}


export default AlbumDetail;