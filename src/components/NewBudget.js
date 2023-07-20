import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const NewBudget = ({ handleNewBudget }) => {

    const [budget, setBudget] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Definir Presupuesto</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                value={budget.toString()}
                onChangeText={setBudget}
            />
            <Pressable
                style={styles.btn}
                onPress={() => handleNewBudget(budget)}
            >
                <Text style={styles.btnTxt}>
                    Agregar Presupuesto
                </Text>

            </Pressable>
        </View>
    )
}

export default NewBudget

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        transform: [{ translateY: 50 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
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