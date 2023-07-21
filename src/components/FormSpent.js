import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../assets/styles'

const FormSpent = ({
    setModal,
    handleSpent,
    expense,
    setExpense,
    deleteExpense }) => {
    const [nameSpent, setNameSpent] = useState('')
    const [amountSpent, setAmountSpent] = useState('0')
    const [categorySpent, setCategorySpent] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (expense?.nameSpent) {
            setNameSpent(expense.nameSpent)
            setAmountSpent(expense.amountSpent)
            setCategorySpent(expense.categorySpent)
            setId(expense.id)
            setDate(expense.date)
        }
    }, [expense])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBtn}>
                <Pressable
                    style={[styles.btn, styles.btnCancel]}
                    onPress={() => {
                        setModal(false)
                        setExpense({})
                    }}
                >
                    <Text style={styles.textBtn}>Cancel</Text>
                </Pressable>

                {expense?.id &&
                    <Pressable
                        style={[styles.btn, styles.btnDelete]}
                        onPress={() => deleteExpense(id)}
                    >
                        <Text style={styles.textBtn}>Delete</Text>
                    </Pressable>
                }

            </View>
            <View style={styles.form}>
                <Text style={styles.title}>{expense?.nameSpent ? 'Edit Spent' : 'New Spent'}</Text>

                <View style={styles.field}>
                    <Text style={styles.label}>Name Spent</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ej. Transport'
                        value={nameSpent}
                        onChangeText={setNameSpent}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Amount spent'
                        keyboardType='numeric'
                        value={amountSpent}
                        onChangeText={setAmountSpent}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Category</Text>
                    <Picker style={styles.input}
                        selectedValue={categorySpent}
                        onValueChange={(itemValue) => setCategorySpent(itemValue)}
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
                <Pressable
                    style={styles.submitBtn}
                    onPress={() => { handleSpent({ nameSpent, amountSpent, categorySpent, id, date }) }}
                >
                    <Text style={styles.submitTxt}>{expense?.nameSpent ? 'Update Spent' : 'Add Spent'}</Text>
                </Pressable>
            </View>

        </SafeAreaView >
    )
}

export default FormSpent

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E40AF",
        flex: 1,
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        flex: 1

    },
    btnCancel: {
        backgroundColor: "#DB2777",
    },
    btnDelete: {
        backgroundColor: "red",
    },
    textBtn: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: "#FFF",
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: "#64748B"
    },
    form: {
        ...globalStyles.container,
    },
    field: {
        marginVertical: 10
    },
    label: {
        color: "#64748B",
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: "#F5F5F5",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    submitBtn: {
        backgroundColor: "#3B82F6",
        padding: 10,
        marginTop: 20,
    },
    submitTxt: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'bold',
        textTransform: 'uppercase',

    }
})