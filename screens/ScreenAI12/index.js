import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const notifications = [{
  id: 1,
  title: 'New message from John',
  summary: 'Hey, how are you doing?',
  read: false
}, {
  id: 2,
  title: 'New message from Sarah',
  summary: 'Can you call me back?',
  read: true
}, {
  id: 3,
  title: 'New message from Alex',
  summary: 'I need your help with something',
  read: false
}];

const NotificationListScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.notificationContainer}>
      <View style={styles.notificationSummary}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationText}>{item.summary}</Text>
      </View>
      {!item.read && <Text style={styles.markAsRead}>Mark as read</Text>}
    </TouchableOpacity>;

  return <View style={styles.container}>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  notificationSummary: {
    flex: 1,
    marginRight: 10
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  notificationText: {
    fontSize: 16,
    color: '#666'
  },
  markAsRead: {
    fontSize: 16,
    color: '#007AFF'
  }
});
export default NotificationListScreen;