import { createSlice } from "@reduxjs/toolkit";

const chatUsersSlice = createSlice({
    name: "chatUsers",
    initialState: {
        chatList: []
    },
    reducers: {
        addChat: (state, action) => {
            state.chatList.push(action.payload); 
        },
        removeChat: (state, action) => {
            state.chatList = state.chatList.filter(chat => chat.id !== action.payload.id); 
        }
    }
});

export default chatUsersSlice.reducer;

export const { addChat, removeChat } = chatUsersSlice.actions;
