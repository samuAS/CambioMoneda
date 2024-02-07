import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import CurrencyComboBox from './CurrencyComboBox';

const InsertExchange = ({ currencies, onAddExchange, onCancel }) => {
    const [fromCurrency, setFromCurrency] = useState(Object.keys(currencies)[0]);
    const [toCurrency, setToCurrency] = useState(Object.keys(currencies)[1]);
    const [amount] = useState('');

    const AddExchange = () => {
        
        const conversionResult = convertCurrency(amount, fromCurrency, toCurrency, currencies);

        //nuevo exchangee
        onAddExchange({
            originCurrency: fromCurrency,
            destCurrency: toCurrency,
            originAmount: parseFloat(amount),
            destAmount: conversionResult,
            id: Date.now(),
            emojiTo: currencies[toCurrency].emoji,
            emojiFrom: currencies[fromCurrency].emoji,
        });
        onCancel();//para poder cerrar el modal
    };

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        //Verifica si elobjeto esta definido o noo
        if (!currencies || typeof currencies !== 'object') {
            console.error('Object undefined');//Sino muestra este mensaje
            return "Invalid Currency";
        }
        //Tipo cambio moneda origen
        const exchangeRateFrom = currencies[fromCurrency].exchangeRate;
        //Tipo cambio moneda destino
        const exchangeRateTo = currencies[toCurrency].exchangeRate;


        //Conversion 
        const result = (parseFloat(amount) * exchangeRateTo) / exchangeRateFrom;

        return result.toFixed(2);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/clarity_dollar-solid.png')} style={styles.imgStyleDollar} />
            <View style={styles.containerplus}>
                <Text>Origin currency:</Text>

                <CurrencyComboBox style={styles.originComboBox}
                    currencies={currencies}
                    selectedCurrency={fromCurrency}
                    onSelectCurrency={(currency) => setFromCurrency(currency)}
                />
                <View>
                    <Text>Amount</Text>
                    <TextInput
                        style={styles.textInput}
                        value={amount}
                        keyboardType="numeric"
                        onSubmitEditing={AddExchange}
                        placeholder="Introduce amount"
                        placeholderTextColor="#000"
                    />
                </View>
                <Image source={require('../assets/img/maki_arrow.png')} style={styles.img} />
                <Text>Destination currency:</Text>
                <CurrencyComboBox
                    currencies={currencies}
                    selectedCurrency={toCurrency}
                    onSelectCurrency={(currency) => setToCurrency(currency)}
                />
                <View style={styles.buttonCntr}>
                    <TouchableOpacity style={styles.button} onPress={AddExchange}>
                        <Text style={styles.textButton}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onCancel}>
                        <Text style={styles.textButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d99b'

    },
    containerplus: {
        width: "95%",
        alignItems: 'center',
    },
    textInput: {
        borderWidth:1,
        borderColor: '#fff',
        padding: 8,
        marginVertical: 5,
        width: 150,
    },
    buttonCntr: {
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
    },
    button: {
        flex: 1,
        padding: 20,
        backgroundColor: '#d27c2c',
        borderRadius: 10,

    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    },
    img: {
        marginTop: 15,
        marginBottom: 20
    },
    imgStyleDollar: {
        marginBottom: 30
    },
    originComboBox: {
        width: 264,
        height: 60,
        borderradius: 8,
        border: 1,
        borderBlockColor: '#d27c2c'
    },

});

export default InsertExchange;