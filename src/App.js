/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const currentUser = 8446774967

  const messages = [
    { message: 'Am good', sender: 9511824471 },
    { message: 'How are you?', sender: 8446774967 },
    { message: 'Hi', sender: 9511824471 },
    { message: 'Hey', sender: 8446774967 },
  ];

  const sendMessage = () => {

  }

  const renderItem = ({ item, index }) => {
    // Message right (mine)
    if (item.sender === currentUser) {
      return (
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>{item.message}</Text>
        </View>
      )
    } else {
      // Message left
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {(messages[index - 1] &&
            messages[index - 1].sender === currentUser) ||
            index === 0 ? (
              <Image
                style={styles.avatarItemLeft}
                source={{uri: item.avatar || 'https://avatars3.githubusercontent.com/u/9009188?s=200&v=4s'}}
              />
              // <Text style={styles.avatarItemLeft}>ZR</Text>
            ) : (
              <View style={{ width: 30, height: 30, marginLeft: 10 }} />
            )}
          <View style={styles.viewWrapItemLeft}>
            <Text style={styles.textItemLeft}>{item.message}</Text>
          </View>
        </View>
      )
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.viewContainer}>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Gappa Tappa</Text>
        </View>
        <FlatList
          inverted={true}
          style={styles.viewContainer}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
        />
        {/*Input*/}
        <View style={styles.viewWrapInput}>
          {/* Input field */}
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.viewTextInput}
            placeholder="Type your message..."
          // onChangeText={value => {
          //   this.setState({currentMessage: value})
          // }}
          // value={this.state.currentMessage}
          />

          {/* Button send message */}
          <TouchableOpacity onPress={sendMessage}>
            {/* <Image source={images.ic_send} style={styles.icSend}/> */}
            <Text style={styles.icSend}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    padding: 10,
    fontWeight: '600',
    color: Colors.black,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#EEE'
  },
  viewContainer: {
    flex: 1
  },
  viewWrapInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  viewTextInput: {
    flex: 1,
  },
  icSend: {
    width: 35,
    marginLeft: 10,
  },
  // Message left
  viewWrapItemLeft: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemLeft: {
    borderRadius: 10,
    width: 170,
    backgroundColor: '#203152',
    color: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  avatarItemLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10
  },
  // Message right
  viewWrapItemRight: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 6,
    marginTop: 6
  },
  textItemRight: {
    borderRadius: 10,
    width: 170,
    backgroundColor: 'white',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
});

export default App;
