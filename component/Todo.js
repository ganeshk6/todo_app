import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo, RemollALLTodo } from '../actions/todoAction/todoActions';
import { styles } from './TodoStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';

import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Description from './Description';
import DeleteAllTask from './DeleteAllTask';

const Todo = () => {
  const [isChecked, setIsCheck] = useState(false)
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;
  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoView}>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Icon name="delete" style={{ fontSize: 20, color: 'red', marginRight: 10 }}
              />
            </TouchableOpacity>
            <View style={styles.todoList}>
              <Text style={{color: 'black', fontSize: 17}}>{item}</Text>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.taskDetails}>Task Details</Text>
      <View>
        <Text style={{ marginTop: 40, fontSize: 15 }}>Task Tittle</Text>
        <Text style={{ color: 'black', fontSize: 20, marginTop: 20 }}>NFT Web App Prototype</Text>
        <View>
          {/* This is Where the Description and Avatar  */}
          <Description />
        </View>
        <View style={styles.taskDelete}>
          <DeleteAllTask />
          {/* <Text style={{ fontSize: 15 }}>Task List</Text>
          <Icon name="delete" style={{ fontSize: 20, color: 'red' }}
          /> */}
        </View>
      </View>
      {renderTodoList()}
      <View style={styles.inputContainer}>
        <Icon name='add' style={styles.plusIcon} onPress={addTodo} />
        <TextInput
          style={styles.mainInput}
          onChangeText={setTodoValue}
          placeholder='Add your todo here'
          value={todoValue}
        />
      </View>
    </View>
  );
};

export default Todo;
