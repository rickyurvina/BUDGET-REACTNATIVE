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
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';

import Header from './src/components/Header'
import NewBudget from './src/components/NewBudget';
import ControlBudget from './src/components/ControlBudget';
import FormSpent from './src/components/FormSpent';

function App(): JSX.Element {

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [modal, setModal] = useState(false)

  const handleNewBudget = (budget: string) => {
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

          <ControlBudget
            budget={budget}
            expenses={expenses}
          /> :

          <NewBudget
            handleNewBudget={handleNewBudget}
            budget={budget}
            setBudget={setBudget}
          />
        }

      </View>

      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
        >
          <FormSpent 
          
          />

        </Modal>

      )}
      {isValidBudget && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.image}
            source={require('./src/assets/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}


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
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 150,
    right: 18
  }

});

export default App;
