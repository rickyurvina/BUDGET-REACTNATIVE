import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import globalStyles from '../assets/styles'
import { formatAmount } from '../helpers'
const ControlBudget = ({
    budget,
    expenses
}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        console.log(expenses)
        const totalExpenses = expenses.reduce((total, spent) => Number(spent.amount) + total, 0)
        const totalAvailable = budget - totalExpenses

        setSpent(totalExpenses)
        setAvailable(totalAvailable)

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.centerChart}>
                <Image
                    style={styles.chart}
                    source={require('../assets/img/grafico.jpg')}
                />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.value}>
                    <Text style={styles.label}>
                        Budget:{' '}
                    </Text>
                    {formatAmount(budget)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>
                        Available:{' '}
                    </Text>
                    {formatAmount(available)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>
                        Spent:{' '}
                    </Text>
                    {formatAmount(spent)}
                </Text>
            </View>
        </View>
    )
}

export default ControlBudget

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    },
    centerChart: {
        alignItems: 'center',
    },
    chart: {
        width: 200,
        height: 200,
    },
    containerText: {
        marginTop: 50,
    },
    value: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontWeight: '700',
        color: '#3B82F6',
    },

})