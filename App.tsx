/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/Header'
import NewBudget from './src/components/NewBudget';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1
  },
  header:{
    backgroundColor:"#3B82F6"
  }

});

export default App;
