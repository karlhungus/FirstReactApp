/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('react-native-shopify-login');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MyFirstApp = React.createClass({
  getInitialState: function() {
    return {loggedIn: false, shop: ""}
  },

  _onLogin: function(user) {
    // the user's authenticity token is available from `user.token`.
    this.setState({loggedIn: true, shop:user.shop});
  },


  render: function() {
    if (!this.state.loggedIn) {
      return (
        <Login onLoggedIn={this._onLogin}>
          <Text>Loading!</Text>
        </Login>
      );
    } else {
      return (<View style={styles.container}>
        <Text style={styles.welcome}>
          You are logged into {this.state.shop}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      );
    }
  }
});
AppRegistry.registerComponent('logindemo', () => logindemo);

var styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
