import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import userReducer from './userSlice'
import chatListReducer from './chatUsers'

const appStore = configureStore({
    reducer : {
        theme : themeReducer , 
        user : userReducer, 
        chatList : chatListReducer 
    }
})

export default appStore;