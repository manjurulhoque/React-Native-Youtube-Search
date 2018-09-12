import React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = {
        term: ''
    }
    render() {
        return (
            <View style={styles.searchView}>
                <TextInput 
                    style={styles.search}
                    value={this.state.term}
                    onChangeText={term => this.setState({term})}
                    />
                <Button
                    buttonStyle={styles.button}
                    title={this.props.loading ? "Loading..." : "Search"}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    button: {
        height: 30,
        marginBottom: 8
    },
    search: {
        flex: 1
    },
    searchView: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    }
});

export default SearchBar;