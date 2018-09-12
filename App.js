import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppHeader from './src/components/AppHeader';
import SearchBar from './src/components/SearchBar';

export default class App extends Component {

    onPressSearch = term => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader/>
                <SearchBar onPressSearch={this.onPressSearch}/>
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
