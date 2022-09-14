import { configureStore } from '@reduxjs/toolkit';
import  tokenReducer  from './redusers/token';
import { apiSlice } from '../api/apiSlice';


export const store = configureStore({
  reducer: {
   token: tokenReducer,
   [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:getDefaultMiddleware=> getDefaultMiddleware().concat(apiSlice.middleware),
   
  devTools:false
});
