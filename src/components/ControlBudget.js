import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import globalStyles from '../assets/styles'
import { formatAmount } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'
const ControlBudget = ({
    budget,
    expenses
}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, spent) => Number(spent.amountSpent) + total, 0)
        const totalAvailable = budget - totalExpenses
        const newPercentage =  ((totalExpenses / budget) * 100).toFixed(0)
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1000)
        setSpent(totalExpenses)
        setAvailable(totalAvailable)
    }, [expenses])

    return (
        <View style={styles.container}>
            <View style={styles.centerChart}>
                <CircularProgress
                    value={percentage}
                    duration={1500}
                    radius={100}
                    valueSuffix={'%'}
                    inActiveStrokeColor='#F5F5F5'
                    inActiveStrokeWidth={15}
                    activeStrokeColor='#3B82F6'
                    activeStrokeWidth={15}
                    title='Spent'
                    titleStyle={{fontWeight:'bold',fontSize:20}}
                    titleColor='#64748B'
                >

                </CircularProgress>

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