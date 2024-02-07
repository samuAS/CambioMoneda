import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CurrencyComboBox = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);
 
 
  const handleCurrencyChange = (currency) => {

    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };


  return (

   <View style={styles.container}>

    <RNPickerSelect 
      placeholder={{ label: 'Selecione una moneda', value: null }}
      onValueChange={handleCurrencyChange}
      items={Object.keys(currencies).map((currencyCode) => {

        return {
          label: `${currencies[currencyCode].emoji} ${currencies[currencyCode].name}`,
          value: currencyCode
        }
      }
      )
    }
    />
    </View>
  );
  
};
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#D27C2C",
      borderRadius:10,
    },});


export default CurrencyComboBox;
