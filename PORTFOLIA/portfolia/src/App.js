import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";


// Component 
import Header from './components/Layouts/Header/header';

// pages
import Landing from './pages/Landing/landing';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Landing />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
