import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { getItem } from '../core/services/common/storage.services';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: "",
        password : '',
        name: "",
        phoneNumber : '',
        token : getItem('token') ? getItem('token') : null,
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

        onTokenChange: (state, action) => {
            state.token = action.payload
        }, 
    },
});

export const {onEmailChange , onPhoneNumberChange , onPasswordChange , onTokenChange } = userSlice.actions; // common way

export const useUserSelector = () => useSelector(reducer => reducer.user) // costume hook

export default userSlice.reducer;