import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Tabs
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  tabButton: { flex: 1, padding: 12, alignItems: 'center' },
  tabText: { fontSize: 16, color: '#666' },
  activeTab: { fontWeight: 'bold', color: '#0078fe' },

  // Feed
  feedContainer: { flex: 1, padding: 10 },
  postCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  postAuthor: { fontWeight: 'bold', marginBottom: 4, fontSize: 16 },
  postContent: { fontSize: 15, marginBottom: 8 },
  commentBubble: { flexDirection: 'row', marginVertical: 2 },
  commentAuthor: { fontWeight: '600', marginRight: 4 },
  commentText: { fontSize: 14 },
  commentInputRow: { flexDirection: 'row', marginTop: 8 },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  commentButton: {
    backgroundColor: '#0078fe',
    borderRadius: 20,
    marginLeft: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  commentButtonText: { color: '#fff', fontWeight: '600' },

  // Messenger
  messageList: { padding: 10 },
  messageBubble: { maxWidth: '80%', padding: 10, marginVertical: 5, borderRadius: 20 },
  myMessage: { alignSelf: 'flex-end', backgroundColor: '#0078fe' },
  theirMessage: { alignSelf: 'flex-start', backgroundColor: '#333' },
  messageText: { color: '#fff', fontSize: 16 },
  authorText: { fontSize: 13, fontWeight: '600', color: '#eee' },
  metaInfo: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 4 },
  timeText: { fontSize: 12, color: '#ddd', marginRight: 6 },
  statusText: { fontSize: 12, color: '#ddd' },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#0078fe',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
  sendButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});