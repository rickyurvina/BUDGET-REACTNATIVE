/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import Header from './src/components/Header'
import NewBudget from './src/components/NewBudget';
import ControlBudget from './src/components/ControlBudget';

function App(): JSX.Element {

  const [isValidBudget, setIsValidBudget] = useState(false)

  const handleNewBudget = (budget) => {
    if (Number(budget) > 0) {
      setIsValidBudget(true)


    } else {
      Alert.alert('Error', 'Budget must be greater than 0', [{ text: 'OK' }])
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isValidBudget ?

          <ControlBudget /> :

          <NewBudget
            handleNewBudget={handleNewBudget}
          />
        }

      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1
  },
  header: {
    backgroundColor: "#3B82F6"
  }

});

export default App;
