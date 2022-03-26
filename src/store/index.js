import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import cardSlice from "./cardsSlice"
import todosSlice from "./todosSlice"

const store = configureStore({
    reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer,
    todos: todosSlice.reducer,

},
})




export default store
