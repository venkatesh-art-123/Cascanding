import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import User from "./User";
import Count from './useState/count';
import { CountEffect as Effect } from './useEffect/countEffect';
import Referrence from "./useRef/ref";
import Memo from "./useMemo/memo";
import { UseCallBack } from './useCallBack/callBack';
import Context from './useContext/context';
import Home from "./Routes/home";
import About from "./Routes/about";
import Contact from "./Routes/contact";



import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Navbar from './Routes/router';
import Error from './Routes/error';

export const ThemeChanges = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("venakteshjj@gmail.com")
  const [user, setUser] = useState("venkateshjj");
  const [theme, setTheme] = useState(false);
  console.log("App themeChange", theme)

  return (
    <> <h1> Lets begin in App</h1>
      {/* <button onClick={() => setTheme(!theme)}> Update Theme </button> */}
      {/* <Count /> useState */}
      {/* <User user={user} email={email}/>  Props , export & import*/}
      {/* <Effect /> useEffect */}
      {/* <Referrence /> useRef */}
      {/* <Memo /> useMemo */}
      {/* <UseCallBack /> useCallback */}
      {/* <ThemeChanges.Provider value={{
        theme
      }}>
        <Context theme={theme} />
      </ThemeChanges.Provider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/home/:username" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
