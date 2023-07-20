import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View>
            <Text style={styles.text}>Planificador de Gastos</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B82F6'
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: "#FFF",
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop:10
    }
})