import {createSlice} from '@reduxjs/toolkit'


const token = createSlice({
    name:'token',
    initialState:{token:'',page:1},
    reducers:{
        auth(state,action){
            state.token = action.payload.token
        },
        setPage(state,action){
            state.page = action.payload
        }
    }
})

export const {auth,setPage} = token.actions
export const getPage = state =>state.token.page
export default token.reducer