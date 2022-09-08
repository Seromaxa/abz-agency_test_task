import { apiSlice } from "./apiSlice";
import {getUsers} from './getUsers'
import { setPage } from "../app/redusers/token";  


const singUpUser = apiSlice.injectEndpoints({
    endpoints:build=>({
        sinUp:build.mutation({
            query:body=>({
                url:'users',
                method:'POST',
                body
            }),
            invalidatesTags:['Users'],
           async onQueryStarted(_,{dispatch,queryFulfilled,getState}){
                 dispatch(setPage(1))
                 const {page} = getState().token
                 const newUser = (await queryFulfilled).data
                 if(newUser){
                    dispatch(getUsers.endpoints.userList.initiate(page))
                 }
               
            }  
         })
    })
})

export const {useSinUpMutation} = singUpUser