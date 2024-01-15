import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import LandingPage from "./pages/LandingPage";


export default function App() {
  return (
   <>
   <Routes>
   <Route index element={<LandingPage />} />
   <Route path="login" element={<LoginPage />} />
   </Routes>
   </>
  );
}


