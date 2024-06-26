import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import LocalGallery from './src/pages/LocalGallery';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

 

const images = [
    require('./src/assets/images/other/chokr.jpg'),
    require('./src/assets/images/other/chokr1.jpg'),
    require('./src/assets/images/users/profile.png'),
    require('./src/assets/images/users/user4.jpg'),
    
    // Add more image URIs as needed
  ];



const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };
  
  

  const toggleTodo = (id) => {
    setTodos(
      todos.map((app) =>
        app.id === id ? { ...app, completed: !app.completed } : app
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((app) => app.id !== id));
  };
  
  return (
    <View style={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
      <LocalGallery images={images} />
    </SafeAreaView>
      
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Add new text"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add text</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.app}>
            <TouchableOpacity
              onPress={() => toggleTodo(item.id)}
              style={[
                styles.todoText,
                { textDecorationLine: item.completed ? 'line-through' : 'none' },
              ]}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  app: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
  },
  delete: {
    color: 'red',
    marginLeft: 10,
  },
});

export default TodoApp;
