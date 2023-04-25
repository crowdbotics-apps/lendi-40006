import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ScreenComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('Today');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleFilterChange = filter => {
    setSelectedFilter(filter);
  };

  const handleWithdraw = () => {// handle withdraw logic here
  };

  return <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterOption, selectedFilter === 'Today' && styles.selectedFilterOption]} onPress={() => handleFilterChange('Today')}>
          <Text style={[styles.filterOptionText, selectedFilter === 'Today' && styles.selectedFilterOptionText]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterOption, selectedFilter === 'This week' && styles.selectedFilterOption]} onPress={() => handleFilterChange('This week')}>
          <Text style={[styles.filterOptionText, selectedFilter === 'This week' && styles.selectedFilterOptionText]}>This week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterOption, selectedFilter === 'Last week' && styles.selectedFilterOption]} onPress={() => handleFilterChange('Last week')}>
          <Text style={[styles.filterOptionText, selectedFilter === 'Last week' && styles.selectedFilterOptionText]}>Last week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterOption, selectedFilter === 'This month' && styles.selectedFilterOption]} onPress={() => handleFilterChange('This month')}>
          <Text style={[styles.filterOptionText, selectedFilter === 'This month' && styles.selectedFilterOptionText]}>This month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterOption, selectedFilter === 'Last month' && styles.selectedFilterOption]} onPress={() => handleFilterChange('Last month')}>
          <Text style={[styles.filterOptionText, selectedFilter === 'Last month' && styles.selectedFilterOptionText]}>Last month</Text>
        </TouchableOpacity>
        <TextInput style={styles.amountInput} placeholder="Amount ($)" keyboardType="numeric" />
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Display Balance ($)</Text>
        <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
          <Text style={styles.withdrawButtonText}>Withdraw money</Text>
        </TouchableOpacity>
        <TextInput style={styles.withdrawAmountInput} placeholder="Set amount ($)" keyboardType="numeric" value={withdrawAmount} onChangeText={setWithdrawAmount} />
        <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
          <Text style={styles.withdrawButtonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  filterOption: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10
  },
  selectedFilterOption: {
    backgroundColor: '#007aff'
  },
  filterOptionText: {
    color: '#333',
    fontSize: 16
  },
  selectedFilterOptionText: {
    color: '#fff'
  },
  amountInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'center'
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  withdrawButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 16
  },
  withdrawAmountInput: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: '100%'
  }
});
export default ScreenComponent;