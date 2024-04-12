import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import userReducer from './userSlice'

const appStore = configureStore({
    reducer : {
        theme : themeReducer , 
        user : userReducer, 
    }
})

export default appStore;