import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from './styles';

const initialMessages = [
  {
    id: 1,
    text: 'Hi Pwede makigfriend 👋',
    sender: 'other',
    author: 'Mark',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'delivered',
  },
  {
    id: 2,
    text: 'Musta!',
    sender: 'me',
    author: 'Claire',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'delivered',
  },
];

export default function Messenger() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      sender: 'me',
      author: 'Claire',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    // Simulate delivered
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === newMessage.id ? { ...m, status: 'delivered' } : m))
      );
    }, 1000);
  };

  const handleLongPress = (msg) => {
    Alert.alert(
      'Message Options',
      `"${msg.text}"`,
      [
        { text: 'Delete for Me', onPress: () => deleteForMe(msg.id), style: 'destructive' },
        ...(msg.sender === 'me'
          ? [{ text: 'Delete for Everyone', onPress: () => deleteForEveryone(msg.id), style: 'destructive' }]
          : []),
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const deleteForMe = (id) => setMessages((prev) => prev.filter((m) => m.id !== id));
  const deleteForEveryone = (id) =>
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, text: 'This message was deleted', deleted: true } : m
      )
    );

  useEffect(() => {
    if (scrollViewRef.current) scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.messageList}>
        {messages.map((msg) => (
          <TouchableOpacity key={msg.id} onLongPress={() => handleLongPress(msg)} delayLongPress={300}>
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'me' ? styles.myMessage : styles.theirMessage,
                msg.deleted && { backgroundColor: '#999' },
              ]}
            >
              <Text style={styles.authorText}>{msg.author}</Text>
              <Text style={styles.messageText}>{msg.text}</Text>
              {!msg.deleted && (
                <View style={styles.metaInfo}>
                  <Text style={styles.timeText}>{msg.time}</Text>
                  {msg.sender === 'me' && <Text style={styles.statusText}>{msg.status === 'sent' ? '✓' : '✓✓'}</Text>}
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}