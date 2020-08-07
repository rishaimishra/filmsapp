import React from 'react';
import {Text,AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App =()=>{

    return (
        <View>

        <Header headerText={'Films!'} />
        <AlbumList />
        </View>
        );
};

//Render it to device

AppRegistry.registerComponent('films',()=>App);
