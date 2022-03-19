import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import cardSlice from "./cardsSlice"

const store = configureStore({
    reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer

},
})




export default store