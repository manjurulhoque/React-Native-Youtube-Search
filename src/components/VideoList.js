import React from 'react';
import { ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import VideoListItem from './VideoListItem';

const VideoList = ({videos}) => {
    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.etag}
            video={video}
        />
    ));

    return(
        <ScrollView>
            <View style={styles.container}>
                {videoItems}
            </View>
        </ScrollView>
    )
};

const styles = {
    container: {
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10
    }
};

export default VideoList;