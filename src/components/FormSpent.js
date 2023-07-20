import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker'

const FormSpent = () => {
    return (
        <SafeAreaView>
            <View>
                <Pressable>
                    <Text>Cancel</Text>
                </Pressable>
            </View>
            <View>
                <Text>New Spent</Text>
            </View>
            <View>
                <Text>Name Spent</Text>
                <TextInput
                    placeholder='Ej. Transport'
                />
            </View>
            <View>
                <Text>Amount</Text>
                <TextInput
                    placeholder='AMount spent'
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text>Category</Text>
              <Picker>
                <Picker.Item label="-- Select --" value="" />
                <Picker.Item label="Saves" value="saves" />
                <Picker.Item label="Food" value="food" />

              </Picker>
            </View>
        </SafeAreaView>
    )
}

export default FormSpent

const styles = StyleSheet.create({

})