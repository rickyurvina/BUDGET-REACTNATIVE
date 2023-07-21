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
import { generateId } from './src/helpers';
import BudgetList from './src/components/BudgetList';
import Filter from './src/components/Filter';

function App(): JSX.Element {

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [modal, setModal] = useState(false)
  const [expense, setExpense] = useState({})
  const [filter, setFilter] = useState('')
  const [expensesFiltered, setExpensesFiltered] = useState([])

  const handleNewBudget = (budget: string) => {
    if (Number(budget) > 0) {
      setIsValidBudget(true)

    } else {
      Alert.alert('Error', 'Budget must be greater than 0', [{ text: 'OK' }])
    }
  }

  const handleSpent = expense => {

    if ([expense.nameSpent, expense.amountSpent, expense.categorySpent].includes('')) {
      Alert.alert('Error', 'All fields are required', [{ text: 'OK' }])
      return
    }
    if (expense.id) {

      const expensesUpdated = expenses.map(item => item.id === expense.id ? expense : item)
      setExpenses(expensesUpdated)


    } else {
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }

    setModal(!modal)
    setExpense({})

  }

  const deleteExpense = id => {
    Alert.alert(
      "Delete expense",
      "Are you sure?",
      [
        {text: "Cancel", style: "cancel"},
        {text: "Yes, delete", onPress: () => {
          const expensesUpdated = expenses.filter(item => item.id !== id)
          setExpenses(expensesUpdated)
          setModal(!modal)
        }},
      ]
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.header}>
          <Header />
          {isValidBudget ?

            <ControlBudget
              budget={budget}
              expenses={expenses}
            />
            : (
              <NewBudget
                handleNewBudget={handleNewBudget}
                budget={budget}
                setBudget={setBudget}
              />
            )
          }
        </View>
        {isValidBudget && (
          <>
          <Filter
          filter={filter}
          setFilter={setFilter}
          expenses={expenses}
          setExpensesFiltered={setExpensesFiltered}
          />
            <BudgetList
            expenses={expenses}
            setModal={setModal}
            setExpense={setExpense}
            filter={filter}
            expensesFiltered={expensesFiltered}
          />
          </>
        
        )}
      </ScrollView>

      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <FormSpent
            setModal={setModal}
            handleSpent={handleSpent}
            expense={expense}
            setExpense={setExpense}
            deleteExpense={deleteExpense}
          />

        </Modal>

      )}

      {isValidBudget && (
        <Pressable
        style={styles.pressable}
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
    backgroundColor: "#3B82F6",
    minHeight: 350,
  },
  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },
  image: {
    width: 60,
    height: 60
  },

});

export default App;
