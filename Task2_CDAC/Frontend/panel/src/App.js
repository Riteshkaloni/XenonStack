import * as React from 'react';


import './App.css';
import ContextProvider from './navigation/ContextProvider';
import MainNavigation from './navigation/MainNavigation';



function App() {


  return (


    <ContextProvider>
      <div className="App">
        <MainNavigation />
      </div>
    </ContextProvider>


  );
}

export default App;
