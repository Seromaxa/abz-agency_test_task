import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'


export const baseQueryFn = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
    prepareHeaders:(headers,{getState})=>{
       const token = getState().token.token
        if(token){
            headers.set('Token', token)
        }
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery:baseQueryFn,
    tagTypes:['Users'],
    endpoints:build=>({})
})
