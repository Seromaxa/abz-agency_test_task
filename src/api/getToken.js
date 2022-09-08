import { apiSlice } from "./apiSlice";
import { auth } from "../app/redusers/token";


const tokenizer = apiSlice.injectEndpoints({
    endpoints:build=>({
        getToken:build.query({
            query:()=>({
                url:'token'
            }),
            async onQueryStarted(_,{dispatch,queryFulfilled}){
                const token =  (await queryFulfilled).data
                dispatch(auth({...token}))
               }
        }),
       
    })
}) 

export const {useGetTokenQuery} = tokenizer