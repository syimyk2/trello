import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from ".././helpers/constants";

// ---------------asyn thunks------------------------
export const postTodo = createAsyncThunk(
  "todos/postTodo",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/todos.json`, {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Post todo ocured error");
      }
      // dispatch(getTodos());
      console.log(result);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putTodos = createAsyncThunk(
  "todos/putTodos",
  async ({ data, id }, { rejectWithValue, dispatch, getState }) => {
    const listData = getState().todos.todos;
    const object = listData.find((el) => el.id === id);
    const todoData = object.todo.push(data);
    console.log(data);
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify({ todo: todoData }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Post todo ocured error");
      }
      // dispatch(getTodos());
      console.log(result);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/todos.json`);
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Get todo ocured error");
      }
      // console.log(result);
      let transformedTodos = [];
      for (const key in result) {
        transformedTodos.push({
          task: result[key].task,
          id: key,
          todo: result[key].todo,
        });
      }
      return transformedTodos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// -----------helper----------
const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};
// ---------todosSlice-----------
const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [] ,status: 'pending', error: null },
  reducers: {
    addTodos(state, action) {
      state.todos.push({...action.payload})
    },
  },
  // extraReducers: {
  //   [getTodos.pending]: (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   },
  //   [getTodos.fulfilled]: (state, action) => {
  //     state.status = "resolved";
  //     state.todos = action.payload;
  //   },
  //   [getTodos.rejected]: setError,
  //   // [removeTodos.rejected]: setError,
  //   // [toggleStatus.rejected]: setError,
  // },
});

export const todoActons = todosSlice.actions;
export default todosSlice;
