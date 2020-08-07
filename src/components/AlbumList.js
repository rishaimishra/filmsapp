import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = {albums: []};

    componentWillMount(){
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map(album =>
        <AlbumDetail key={album.title} data={album} />
            )
    }

    render() {
        return (
            <View>
                <Text>{this.renderAlbums()}</Text>
            </View>
        );
    }
}

export default AlbumList;