import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import globalStyles from '../assets/styles'
import { Picker } from '@react-native-picker/picker';

const Filter = ({ filter, setFilter, expenses,setExpensesFiltered }) => {

    useEffect(() => {
        if(filter===''){
            setExpensesFiltered([])
        }else{
            const expensesFiltered = expenses.filter(expense => expense.categorySpent === filter)
            setExpensesFiltered(expensesFiltered)
        }
    }, [filter])

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Filter Expenses</Text>
            <Picker style={styles.input}
                selectedValue={filter}
                onValueChange={(value) => setFilter(value)}
            >
                <Picker.Item label="-- Select --" value="" />
                <Picker.Item label="Saves" value="saves" />
                <Picker.Item label="Home" value="home" />
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Health" value="health" />
                <Picker.Item label="Education" value="education" />
                <Picker.Item label="Subscriptions" value="subscription" />
            </Picker>
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        transform: [{ translateY: 0 }],
        marginTop: 80,
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: "#64748B",

    }
})