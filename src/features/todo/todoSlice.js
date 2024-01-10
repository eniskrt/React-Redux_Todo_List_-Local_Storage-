import { createSlice } from '@reduxjs/toolkit'

const localStorageTodos = JSON.parse(localStorage.getItem("items"));
const setItems = (item) => {
  localStorage.setItem("items", JSON.stringify(item));
};


const initialState = {
  todos: localStorageTodos !== null ? localStorageTodos : [],
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
      action.payload,
    ...state.todos
      ]
      setItems(state.todos)
    },
    isDone: (state, action) => {

      const id = action.payload;
      const todo = state.todos.find((item) => item.id == id);
      todo.done = !todo.done;
      setItems(state.todos);
      
    },
    deleteTodo:(state,action) =>{
      state.todos = state.todos.filter(todo =>todo.id !== action.payload)
      setItems(state.todos)
    },
    changeTodo:(state,action) =>{
      const { id, title } = action.payload;
      const todo = state.todos.find((item) => item.id == id);
      todo.title = title;
      setItems(state.todos); 
    }
  }})
// Action creators are generated for each case reducer function
export const { addTodo ,isDone,deleteTodo, changeTodo } = todos.actions

export default todos.reducer