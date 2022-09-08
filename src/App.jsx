import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {useGetTokenQuery} from './api/getToken'



function App() {
useGetTokenQuery('',{pollingInterval: 1000 * 60 * 39})
  return (
    <>
    <Header />
    <Main />

    </>
  );
}

export default App;
