import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feed from './Feed';
import Messenger from './Messenger';
import styles from './styles';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <View style={styles.container}>
      {/* Tab Switcher */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab('feed')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'feed' && styles.activeTab]}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('chat')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'chat' && styles.activeTab]}>Messenger</Text>
        </TouchableOpacity>
      </View>

      {/* Screens */}
      {activeTab === 'feed' ? <Feed /> : <Messenger />}
    </View>
  );
}