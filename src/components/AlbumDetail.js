import React from 'react';
import {Text,Image,View} from 'react-native';
import Card from './Card';
import CardSecion from './CardSection';

const AlbumDetail=({data})=>{
    console.log(data);
    const {title,artist,thumbnail_image,image} =data;
    return (
        <Card>
            <CardSecion>
                <View>
                    <Image style={styles.thumbnail_imageStyle} source={{thumbnail_image}}  />
                </View>
                <View>
                <Text>{title}</Text>
                <Text>{artist}</Text>
                </View>
                <View>
                <Image style={styles.imageStyle} source={{image}}  />
                
                </View>
            
            </CardSecion>
        </Card>
    );
};

const styles={
    thumbnail_imageStyle:{
        height:50,
        width:50
    },
    imageStyle:{
        height:200,
        width:200
    }
}


export default AlbumDetail;