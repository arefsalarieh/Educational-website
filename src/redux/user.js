import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: "",
        password : '',
        name: "",
        phoneNumber : '',
    },
    
    reducers: {
        onEmailChange: (state, action) => {
            state.email = action.payload
        },

        onPhoneNumberChange: (state, action) => {
            state.phoneNumber = action.payload
        },

        onPasswordChange: (state, action) => {
            state.password = action.payload
        },        


    },
});

export const {onEmailChange , onPhoneNumberChange , onPasswordChange} = userSlice.actions; // common way

export const useUserSelector = () => useSelector(reducer => reducer.user) // costume hook

export default userSlice.reducer;