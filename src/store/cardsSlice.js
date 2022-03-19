import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
name: 'card',
initialState: {cardModal: {showCard: false, cardItem: {}}, showAdder: false, itemData: [], cardData: {data : [], }},
reducers: {
    toggleCard(state, actions){
     state.cardModal.cardIsShow = !state.cardModal.cardIsShow
     const newItem = state.itemData.find((el)=>el.id===actions.payload)
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
           title: actions.payload,
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

}
})

export const cardActions = cardSlice.actions

export default cardSlice
