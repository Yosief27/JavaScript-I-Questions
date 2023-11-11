import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LoggIn } from "./components/button";
import User  from "./components/State/User";
import Counter from './components/State/Counter';
import {themeContextProvider as ThemeContextProvider} from "./components/Context/ThemeContext"
import {UserContextProvider} from "./components/Context/UserContext"
import Private from './components/Propcomponent/private';
import Profile from './components/Propcomponent/Profile';
import ShuffleName from './components/CallBackHook/ShuffleName';
function App() {

 
 
  return (
  <ThemeContextProvider>
    <h3>
       TypeScript Crash course!!! 
       <UserContextProvider>
          <User/>
       </UserContextProvider>
       <Counter/>
    </h3>
    <Private isLoggin={true} Component={Profile}/>
    <h2>useCallback practices</h2>
    <ShuffleName></ShuffleName>
  </ThemeContextProvider>
  )
}

export default App
