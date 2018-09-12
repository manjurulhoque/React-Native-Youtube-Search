import React, {Component} from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends Component {
    render() {
        return(
            <Header
                centerComponent={{text: 'Youtube search', style: {color: 'white', fontSize: 20}}}
                outerContainerStyles={{ backgroundColor: '#E62117' }}
            />
        )
    }
};