import { apiSlice } from "./apiSlice";

const positions = apiSlice.injectEndpoints({
 endpoints:build=>({
    getPositions:build.query({
        query:()=>({
            url:'positions'
        })
    })
 })
})

export const {useGetPositionsQuery} = positions