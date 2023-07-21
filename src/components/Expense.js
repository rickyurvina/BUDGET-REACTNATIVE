import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/styles'
import { formatAmount, formatDate } from '../helpers'

const dictionaryIcons = {
    saves: require('../assets/img/icono_ahorro.png'),
    home: require('../assets/img/icono_casa.png'),
    food: require('../assets/img/icono_comida.png'),
    health: require('../assets/img/icono_salud.png'),
    subscription: require('../assets/img/icono_suscripciones.png'),
    education: require('../assets/img/icono_suscripciones.png'),
}

const Expense = ({ expense, setModal, setExpense }) => {
    const { nameSpent, amountSpent, categorySpent, date } = expense

    const handleActions = () => {
        setModal(true)
        setExpense(expense)
    }

    return (
        <Pressable
            style={styles.btnExpense}
            onLongPress={() => { handleActions() }}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.containerImage}>
                        <Image
                            style={styles.icon}
                            source={dictionaryIcons[categorySpent]}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.categorySpent}>{categorySpent}</Text>
                            <Text style={styles.nameSpent}>{nameSpent}</Text>
                            <Text style={styles.date}>{formatDate(date)}</Text>
                        </View>
                    </View>
                    <Text style={styles.amountSpent}>{formatAmount(amountSpent)}</Text>
                </View>
            </View>
        </Pressable>

    )
}

export default Expense

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    nameSpent: {
        fontSize: 22,
        color: "#64748B",
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    amountSpent: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        color: "#DB2777",
        fontSize: 10,
        fontWeight: '700',
    },
    categorySpent: {
        color: "#94A3B8",
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})