import { View, StyleSheet, Text, Button,TextInput} from 'react-native';
const Input = ({ title, error, ...props }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} {...props} />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );export default Input

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 16,
  },
  form: {
    marginTop: 16,
  },
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    fontSize: 12,
    color: '#f44336',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  success: {
    marginTop: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
