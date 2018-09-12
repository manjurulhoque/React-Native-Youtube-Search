import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import searchYouTube  from 'youtube-api-search';
import AppHeader from './src/components/AppHeader';
import SearchBar from './src/components/SearchBar';
import { API_KEY }  from './keys';
import VideoList from './src/components/VideoList';

export default class App extends Component {

    state = {
        loading: false,
        videos: []
    }

    onPressSearch = term => {
        this.setState({loading: true});
        searchYouTube({key: API_KEY, term}, (videos) => {
            this.setState({loading: false, videos});
        })
    }

    render() {
        const {loading, videos} = this.state;
        return (
            <View style={styles.container}>
                <AppHeader/>
                <SearchBar loading={loading} onPressSearch={this.onPressSearch}/>
                <VideoList videos={videos}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    }
});
