import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../assets/styles'

const FormSpent = ({ setModal, handleSpent }) => {
    const [nameSpent, setNameSpent] = useState('')
    const [amountSpent, setAmountSpent] = useState('0')
    const [categorySpent, setCategorySpent] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable
                    style={styles.btnCancel}
                    onPress={() => setModal(false)}
                >
                    <Text style={styles.txtCancel}>Cancel</Text>
                </Pressable>
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>New Spent</Text>

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
                        <Picker.Item label="Food" value="food" />
                        <Picker.Item label="Health" value="health" />
                        <Picker.Item label="Education" value="education" />
                        <Picker.Item label="Subscriptions" value="subscription" />
                    </Picker>
                </View>
                <Pressable
                    style={styles.submitBtn}
                    onPress={() => { handleSpent({nameSpent, amountSpent, categorySpent}) }}
                >
                    <Text style={styles.submitTxt}>Add Spent</Text>
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
    btnCancel: {
        backgroundColor: "#DB2777",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
    },
    txtCancel: {
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