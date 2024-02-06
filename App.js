import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
