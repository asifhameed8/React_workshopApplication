'use strict';

var React = require('react-native'),
    ListItem = require('./ListItem'),
    YouTubeViewer = require('./YouTubeViewer');

var {
    Image,
    ListView,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} = React;


var YouTubeList = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log('this.props.data', this.props.data);

        return {
            dataSource : ds.cloneWithRows(this.props.data)
        };
    },


    render: function() {
        return (
            <View style={{flex:1, paddingTop : 20}}>
                <ListView style={{flex:1, backgroundColor : "#EFEFEF", marginTop : 50}}
                    initialListSize={20}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Cat Videos
                    </Text>
                </View>
            </View>
        );
    },

    _renderRow: function(rowData, sectionID, rowID) {
        return (
            <ListItem data={rowData} onPress={this.onPress}/>
        );
    },

    onPress(rowData) {
        this.props.navigator.push({
            component       : YouTubeViewer,
            componentConfig : {
                data : rowData
            }
        });
    }

});

var styles = StyleSheet.create({
    title : {
        textAlign : 'center', 
        fontSize : 24
    },
    titleContainer : {
        position : 'absolute',
        width : Dimensions.get('window').width,
        top : 40,
        backgroundColor : '#FFFFFF',
        marginBottom : 5,
        shadowColor : '#000000',
        shadowRadius : 1,
        shadowOpacity : .3,
        shadowOffset : {
   
            height : 5
        }
    }
});

module.exports = YouTubeList;