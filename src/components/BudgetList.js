import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Expense from './Expense'

const BudgetList = ({ expenses, setModal, setExpense, filter, expensesFiltered }) => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BudgetList</Text>
            {
                filter ? (expensesFiltered.map(expense => (
                    <Expense
                        style={styles.expense}
                        key={expense.id}
                        expense={expense}
                        setModal={setModal}
                        setExpense={setExpense}
                    />
                ))) : (expenses.map(expense => (
                    <Expense
                        style={styles.expense}
                        key={expense.id}
                        expense={expense}
                        setModal={setModal}
                        setExpense={setExpense}
                    />
                )
                ))
            }

            {(expenses.length === 0 || (expensesFiltered.length === 0 && !!filter))  && 
            <Text style={styles.noExpenses}>No expenses yet</Text>
            }
        </View>
    )
}

export default BudgetList

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 100,

    },
    title: {
        color: "#64748B",
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    },
    noExpenses: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },

})