import logo from './logo.svg';
import './App.css';
import Search from './Components/SearchEngine/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <>
 <BrowserRouter>
         
          <Routes>
            <Route path="/" element={<Search />} />  
          </Routes>
      
        </BrowserRouter>
   </>
  );
}

export default App;
