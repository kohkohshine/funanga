import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
   <>
   <Routes>
   <Route index element={<LandingPage />} />
   <Route path="login" element={<LoginPage />} />
   <Route path='home' element={<HomePage/>}/>
   </Routes>
   </>
  );
}


