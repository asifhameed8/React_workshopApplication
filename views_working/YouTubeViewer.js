'use strict';

var React = require('react-native'),
    YouTube = require('react-native-youtube')

var {
    Image,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    View,
} = React;


var YouTubeViewer = React.createClass({

    render : function() {
        var data = this.props.data;

        return ( 
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={this.onBackPress} style={{width : 70, paddingLeft: 10}}>
                        <Text style={{fontSize: 18, color : '#dfe3ee'}}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Player
                    </Text>
                    <View style={{width : 70}}/>
                </View>                

                <View style={{flex:1, justifyContent : 'center', alignItems: 'center'}}>
                    <YouTube
                        ref="youtubePlayer"
                        videoId={data.videoId} // The YouTube video ID
                        play={false}           // control playback of video with true/false
                        hidden={false}        // control visiblity of the entire view
                        playsInline={true}    // control whether the video should play inline

                        onReady={(e)=>{this.setState({isReady: true})}}
                        onChangeState={(e)=>{this.setState({status: e.state})}}
                        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                        onError={(e)=>{this.setState({error: e.error})}}
                        onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

                        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
                    />
                </View>

            </View>
        )
    },

    onBackPress() {
        this.props.navigator.pop();
    }

});


var styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 40,
        backgroundColor : '#000000'
    },
    title : {
        textAlign : 'center', 
        fontSize : 24,
        color : '#FFFFFF',
        flex : 1
    },
    titleContainer : {
        flexDirection : 'row',
        width : Dimensions.get('window').width,
        backgroundColor : '#000000',
        marginBottom : 5
    }
})

module.exports = YouTubeViewer;