import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import globalStyles from '../assets/styles'
const ControlBudget = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/img/grafico.jpg')}
                />
            </View>
            <Text>ControlBudget</Text>
        </View>
    )
}

export default ControlBudget

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    }

})