import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CardReportScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // 여기에 실제 API 호출 코드를 넣으세요.
    // 예: fetch('https://api.yourbackend.com/transactions')
    //     .then(response => response.json())
    //     .then(data => setTransactions(data));

    // 가상의 데이터를 설정합니다.
    const mockData = [
      { id: '1', date: '2024-08-10', amount: 12000, description: 'Online Purchase' },
      { id: '2', date: '2024-08-11', amount: 45000, description: 'Grocery Store' },
      { id: '3', date: '2024-08-12', amount: 3000, description: 'Coffee Shop' },
      { id: '4', date: '2024-08-12', amount: 15000, description: 'Restaurant' },
    ];
    setTransactions(mockData);
  }, []);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.date === selectedDate
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <Text style={styles.amountText}>{item.amount}원</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>결제 내역</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#008485' },
        }}
      />
      {selectedDate ? (
        <FlatList
          data={filteredTransactions}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.noTransactionsText}>날짜를 선택해 주세요.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    alignItems : 'center',
    textAlign : 'center',
    fontWeight: 'bold',
    color: '#008485',
    marginBottom: 16,
  },
  itemContainer: {
    marginTop : 3, 
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: '#008485',
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    color: '#555555',
  },
  descriptionText: {
    fontSize: 18,
    color: '#008485',
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'right',
  },
  noTransactionsText: {
    marginTop: 20,
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
  },
});

export default CardReportScreen;
