import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const initialPosts = [
  {
    id: 1,
    author: 'Claire',
    content: 'Just joined this app 🚀',
    comments: [
      { id: 11, author: 'Mark', text: 'Welcome Claire!' },
      { id: 12, author: 'Anna', text: 'Hi 👋' },
    ],
  },
  {
    id: 2,
    author: 'John',
    content: 'What a nice day 🌞',
    comments: [],
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);
  const [commentInput, setCommentInput] = useState({});

  const handleComment = (postId) => {
    const text = commentInput[postId]?.trim();
    if (!text) return;

    const newComment = {
      id: Date.now(),
      author: 'Claire', // fixed user
      text,
    };

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
      )
    );

    setCommentInput((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <ScrollView style={styles.feedContainer}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postCard}>
          <Text style={styles.postAuthor}>{post.author}</Text>
          <Text style={styles.postContent}>{post.content}</Text>

          {/* Comments */}
          {post.comments.map((c) => (
            <View key={c.id} style={styles.commentBubble}>
              <Text style={styles.commentAuthor}>{c.author}:</Text>
              <Text style={styles.commentText}>{c.text}</Text>
            </View>
          ))}

          {/* Comment Input */}
          <View style={styles.commentInputRow}>
            <TextInput
              style={styles.commentInput}
              placeholder="Write a comment..."
              value={commentInput[post.id] || ''}
              onChangeText={(text) =>
                setCommentInput((prev) => ({ ...prev, [post.id]: text }))
              }
            />
            <TouchableOpacity
              style={styles.commentButton}
              onPress={() => handleComment(post.id)}
            >
              <Text style={styles.commentButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}