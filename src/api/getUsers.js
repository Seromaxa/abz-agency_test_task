import { apiSlice } from "./apiSlice";

export const getUsers = apiSlice.injectEndpoints({
    endpoints:build=>({
        userList:build.query({
            query:(page=1)=>({
              url: `users?page=${page}&count=6`
            }),
            providesTags:['Users'],
            transformResponse:(response)=>{
                response.show_button = response.page !== response.total_pages?true:false
                return response
            }
        })
    })
})


export const {useUserListQuery} = getUsers