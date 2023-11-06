import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: "example@example.com",
        name: "example"
    },
    reducers: {
        onEmailChange: (state, action) => {
            state.email = action.payload
        }
    },
});

export const {onEmailChange} = userSlice.actions; // common way

export const useUserSelector = () => useSelector(reducer => reducer.user) // costume hook

export default userSlice.reducer;