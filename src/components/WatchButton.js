import React from 'react';
import { Button } from 'react-native-elements';

const WatchButton = ({ videoId }) => (
    <Button
        raised
        title="Watch on YouTube"
        icon={{ name: 'play-arrow' }}
        containerViewStyle={{ marginTop: 10 }}
        backgroundColor="#E62117"
        onPress={() => {alert(videoId)}}
    />
);

export default WatchButton;