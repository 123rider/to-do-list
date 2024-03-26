import { BrowserRouter,Routes,Route } from "react-router-dom"
import Index from "./components/Index"
import Login from './components/Login';
import Register from "./components/Register";

export default function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>
}