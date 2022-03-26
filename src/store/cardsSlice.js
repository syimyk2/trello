import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from '.././helpers/constants'

// ---------------asyn thunks------------------------
export const getTodoLIst = createAsyncThunk(
  "card/getTodoList",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_URL}/todo-list.json`);
      if (!response.ok) {
        throw new Error("Something went wrong with Server Firebase!");
      }
      const result = await response.json();
      let transformedData = [];
      for (const key in result) {
        transformedData.push({
          title: result[key].title,
          id: key,
        });
      }
      return transformedData;
    } catch (error) {
      console.log("error");
      return rejectWithValue(error.message);
    }
  }
);
export const removeTodolist = createAsyncThunk(
  "card/removeTodoList",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Can not delete task Error with server in DElETE");
      }

      // dispatch(cardActions.deleteToDo(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodoList =createAsyncThunk(
  'card/addTodoList',
  async function(task,{rejectWithValue, dispatch}){
    try {

      const response =await fetch(`${BASE_URL}/todos.json`,{
        method: 'POST',
        headers: {'Content-Type':'aplication/json'},
        body: JSON.stringify(task)
      })
      if(!response.ok){
        throw new Error('Can not add new task to server Error:')
      }

      // dispatch(getTodos())
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const cardSlice = createSlice({
name: 'card',
initialState: {cardModal: {showCard: false, cardItem: {}}, showAdder: false, itemData: [], cardData: {data : [], }},
reducers: {
    toggleCard(state, actions){
     state.cardModal.cardIsShow = !state.cardModal.cardIsShow
     const newItem = state.itemData.find((el)=>el.id===actions.payload)
     console.log(actions.payload);
     state.cardModal.cardItem = newItem

    },
    toggleAdder(state,actions){
      state.showAdder= actions.payload
    },
    addNewList(state,actions){
        if(actions.payload ===''){
            return
        }
        const newListData ={
           task: actions.payload,
            id: Math.random().toString(),

        }
          state.cardData = {
              data: [...state.cardData.data,newListData],
          }


    },
    addCardItem(state, action){
      console.log(action.payload);
      state.itemData = [...state.itemData,action.payload]
    }

},


})

export const cardActions = cardSlice.actions

export default cardSlice
