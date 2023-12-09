import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ws = new WebSocket('ws://localhost:8080');
const data = {
  type: 'message',
  data: 'Hello world'
}


const dataString = JSON.stringify(data)

const sendMessage = () => {
  try {
    ws.send(dataString); // send a message
  } catch (e) {
    console.log('error sending message')
  }
}

ws.onopen = () => {
  // connection opened
  try {
    ws.send(dataString); // send a message
  } catch (e) {
    console.log('error sending message')
  }
};

ws.onmessage = async e => {
  // a message was received
  console.log('Hello world')
};

ws.onerror = e => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = e => {
  // connection closed
  console.log(e.code, e.reason);
};

export default function App() {
  return (
    <View>
      <Button styles={styles.button} onPress={sendMessage}>
        <Text>Send</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
