import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/styles'

const Expense = ({expense}) => {
    const { nameSpent, amountSpent, categorySpent } = expense

  return (
    <View style={styles.container}>
      <Text style={styles.nameSpent}>{nameSpent}</Text>
      <Text style={styles.amountSpent}>{amountSpent}</Text>
      <Text style={styles.categorySpent}>{categorySpent}</Text>
    </View>
  )
}

export default Expense

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    nameSpent: {},
    amountSpent: {},
    categorySpent: {},
})