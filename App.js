import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Modal } from 'react-native';
import InsertExchange from './components/InsertExchange';



const currencies = {
  "USD": {
    "id": 0,
    "emoji": "🇺🇸",
    "exchangeRate": 1.08,
    "name": "US Dollar"
  },
  "EUR": {
    "id": 1,
    "emoji": "🇪🇺",
    "exchangeRate": 1,
    "name": "Euro"
  },
  "JPY": {
    "id": 2,
    "emoji": "🇯🇵",
    "exchangeRate": 159.64,
    "name": "Japanese Yen"
  },
  "GBP": {
    "id": 3,
    "emoji": "🇬🇧",
    "exchangeRate": 0.86,
    "name": "British Pound"
  },
  "AUD": {
    "id": 4,
    "emoji": "🇦🇺",
    "exchangeRate": 1.65,
    "name": "Australian Dollar"
  },
  "CAD": {
    "id": 5,
    "emoji": "🇨🇦",
    "exchangeRate": 1.45,
    "name": "Canadian Dollar"
  },
  "CHF": {
    "id": 6,
    "emoji": "🇨🇭",
    "exchangeRate": 0.94,
    "name": "Swiss Franc"
  },
  "CNY": {
    "id": 7,
    "emoji": "🇨🇳",
    "exchangeRate": 7.76,
    "name": "Chinese Yuan"
  },
  "SEK": {
    "id": 8,
    "emoji": "🇸🇪",
    "exchangeRate": 8.51,
    "name": "Swedish Krona"
  },
  "NZD": {
    "id": 9,
    "emoji": "🇳🇿",
    "exchangeRate": 1.77,
    "name": "New Zealand Dollar"
  },
  "INR": {
    "id": 10,
    "emoji": "🇮🇳",
    "exchangeRate": 89.28,
    "name": "Indian Rupee"
  },
  "BRL": {
    "id": 11,
    "emoji": "🇧🇷",
    "exchangeRate": 5.35,
    "name": "Brazilian Real"
  },
  "RUB": {
    "id": 12,
    "emoji": "🇷🇺",
    "exchangeRate": 97.86,
    "name": "Russian Ruble"
  },
  "ZAR": {
    "id": 13,
    "emoji": "🇿🇦",
    "exchangeRate": 20.36,
    "name": "South African Rand"
  },
  "MXN": {
    "id": 14,
    "emoji": "🇲🇽",
    "exchangeRate": 42.04,
    "name": "Mexican Peso"
  }
};
const App = () => {
  const [showInsertExchange, setShowInsertExchange] = useState(false);
  const [exchanges, setExchanges] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  //New Exchange
  const AddExchange = (newExchange) => {
    const exchange = {
      id: exchanges.length, ...newExchange,//Se le pone un id al exchange
    };

    setExchanges([...exchanges, exchange]);
    setShowInsertExchange(false);//se oculta despues de añadir
  };

  //Delete Exchange
  const DeleteExchange= (exchangeId) => {
    const updatedExchanges = exchanges.filter((exchange) => exchange.id !== exchangeId);
    setExchanges(updatedExchanges);
  };
  const headerCnt = (

    <View style={styles.header}>
      <Image style={styles.headerImg} source={require('./assets/img/ep_money.png')} />
      <View>
        <Text style={styles.headerTitle}>Currency Exchanger</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setShowInsertExchange(true)}>
          <Image style={styles.ImgButton} source={require('./assets/img/zondicons_add-outline.png')} />
        </TouchableOpacity>

      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {headerCnt}
      <Modal visible={showInsertExchange}>
        <InsertExchange
          currencies={currencies}
          onCancel={() => setShowInsertExchange(false)}
          onAddExchange={AddExchange}
          onSelectCurrency={setSelectedCurrency}
        />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginRight: 3,
    marginTop: 20,
    backgroundColor: '#fffacd'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerImg: {
    width: 100,
    height: 100,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 10,
    alignItems: "flex-end",
  },
  ImgButton: {
    width: 30,
    height: 30,
  },
});
export default App;