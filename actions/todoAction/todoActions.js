import {ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO} from './ActionTypes';

export const AddTodo = payload => ({type: ADD_TODO, payload});

export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});

export const RemoveALLTodo = payload => ({type: REMOVE_ALL_TODO, payload});

export const deleteAll = () =>{
    return{
        type: REMOVE_ALL_TODO
    }
}