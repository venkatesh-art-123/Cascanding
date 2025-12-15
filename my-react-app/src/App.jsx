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
import Reducer from './useReducer/reducer';

export const ThemeChanges = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("venakteshjj@gmail.com")
  const [user, setUser] = useState("venkateshjj");
  const [theme, setTheme] = useState(false);
  console.log("App themeChange", theme)

  return (
    <> <h1> Lets begin in App</h1>
      <button onClick={() => setTheme(!theme)}> Update Theme </button>
      {/* <Count /> useState */}
      {/* <User user={user} email={email}/>  Props , export & import*/}
      {/* <Effect /> useEffect */}
      {/* <Referrence /> useRef */}
      {/* <Memo /> useMemo */}
      {/* <UseCallBack /> useCallback */}
      {/* <Context theme={theme} /> props via */}
      {/* <ThemeChanges.Provider value={{
        theme
      }}>
        <Context theme={theme} />
      </ThemeChanges.Provider> useContext */}
      <Reducer/>



    </>
  )
}

export default App
