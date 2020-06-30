// In App.js in a new project

import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SafeAreaView style={style.rootContainer}>
        <Header />
        <Content />
        <Footer />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default App;
