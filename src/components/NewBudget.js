import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import globalStyles from '../assets/styles'

const NewBudget = ({
    handleNewBudget,
    budget,
    setBudget }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Establish Budget</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Add your budget Ej. 300'
                style={styles.input}
                value={budget.toString()}
                onChangeText={setBudget}
            />
            <Pressable
                style={styles.btn}
                onPress={() => handleNewBudget(budget)}
            >
                <Text style={styles.btnTxt}>
                    Add Budget
                </Text>
            </Pressable>
        </View>
    )
}

export default NewBudget

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: "#3B82F6",
    },
    input: {
        backgroundColor: "#F5F5F5",
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
    btn: {
        marginTop: 30,
        backgroundColor: "#1048A4",
        padding: 10,
        borderRadius: 10,
    },
    btnTxt: {
        color: "#FFF",
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})