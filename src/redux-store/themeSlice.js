import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice(
    {
        name : "theme" , 
        initialState  : {
            darkTheme : true , 

        }, 

        reducers : {
            toggleTheme : (state) => {
                state.darkTheme = !state.darkTheme;
            }
        }

    }
)

export default themeSlice.reducer ; 

export const {toggleTheme}  = themeSlice.actions; 