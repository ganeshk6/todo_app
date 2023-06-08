import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

const TodoStyles = {
  main: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  taskDetails: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: "100%",
    elevation: 40,
    height: 55,
    marginTop: 0,
    borderRadius: 15,
  },
  plusIcon: {
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: "row",
  },
  todoView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 60,
    borderRadius: 15,
    marginTop: 10,
    width: 380,
    height: 55,
    alignItems: 'center',
    fontSize: 30
  },
  removeTodo: {
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: "row",
    color: 'black',
  },
  todoList: {
    color: 'darkblack',
    fontSize: 30,
  }
};
export const styles = StyleSheet.create(TodoStyles);
