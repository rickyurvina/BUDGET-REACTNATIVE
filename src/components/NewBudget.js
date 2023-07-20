import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'

const NewBudget = () => {
    return (
        <View style={styles.container}>
            <Text>Definir Presupuesto</Text>
            <TextInput />
            <Pressable>
                <Text>
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
    }

})