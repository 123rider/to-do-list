import { BrowserRouter,Routes,Route } from "react-router-dom"
import Index from "./components/Index"
import Login from './components/Login';

export default function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
}