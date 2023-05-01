/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
    YouTubeJSON = require('./youtube_data.js'),
    YouTubeList = require('./views/YouTubeList');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} = React;

var YTViewer = React.createClass({
    render: function() {
        var initialRoute = {
                title           : 'Test',
                component       : YouTubeList,
                componentConfig : {
                    data : YouTubeJSON
                }
            };

        return (
            <Navigator style={{flex:1}}
                initialRoute={initialRoute}
                renderScene={this.renderScene}
            />
            
        );
    },

    renderScene : function (route, navigator)  {
        window.subNav = navigator;
        // console.log('route', route);
        var baseObj = {
            navigator : navigator
        }

        if (route.componentConfig) {
            Object.assign(baseObj, route.componentConfig);
        }

        if (route.component) {
            return React.createElement(route.component, baseObj);
        }
    },
});

var styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('YTViewer', () => YTViewer);
