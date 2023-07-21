import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Expense from './Expense'

const BudgetList = ({ expenses }) => {
    useEffect(() => {

        console.log({ expenses })
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BudgetList</Text>

            {expenses.length === 0 ?
                <Text style={styles.noExpenses}>No expenses</Text>
                :

                expenses.map(expense => (
                    <Expense
                        style={styles.expense}
                        key={expense.id}
                        expense={expense}
                    >
                    </Expense>
                )
                )}
        </View>
    )
}

export default BudgetList

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
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