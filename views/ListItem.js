'use strict';

var React = require('react-native');

var {
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} = React;


var ListItem = React.createClass({


    render : function() {
        var data = this.props.data,
            thumbs = data.thumbnails,
            imageUri = thumbs.medium || thumbs.high || thumbs.default;

        return (    
            <Text>{data.videoId}</Text>
        );
    }

});

var styles = StyleSheet.create({
    container : {
        marginLeft: 5, 
        marginRight : 5,
        marginBottom : 10,
        shadowColor : '#000000',
        shadowRadius : 1,
        shadowOpacity : .2,
        shadowOffset : {
            width : 2,
            height : 2
        }
    },
    
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#FFFFFF',
    },   
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        flex: 1
    }
});

module.exports = ListItem;




