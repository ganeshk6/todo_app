import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo, RemoveALLTodo } from '../actions/todoAction/todoActions';
import {deleteAll} from '../actions/todoAction/todoActions';

const DeleteAllTask = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.taskDelete}>
            <Text style={{ fontSize: 15 }}>Task List</Text>
            <Icon onPress={()=> dispatch(deleteAll())} name="delete" style={{ fontSize: 20, color: 'red' }}
              />
        </View>
    )
}

const styles = StyleSheet.create({
  taskDelete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25
  },
});

export default DeleteAllTask;