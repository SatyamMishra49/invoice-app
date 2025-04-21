import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Addnotes from './pages/Addnotes';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/addnotes" element={<Addnotes />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
