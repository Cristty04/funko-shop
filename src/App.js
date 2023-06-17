import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import HomePage from './pages/HomePage';
import FunkoPopPage from './pages/FunkoPopPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
    <NavigationComponent></NavigationComponent>
    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/funkoPop" element={<FunkoPopPage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/login" element={<LoginPage/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
