import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.userName = action.payload;
      
    },
    setIsLogout: (state) => {
      state.userName = null;
      
    }
  }
});


export const { setIsLogin, setIsLogout } = userSlice.actions;

export default userSlice.reducer;
