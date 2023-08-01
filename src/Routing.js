import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectEat from './selecteat'
import App from './App'


function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Selecteat" element={<SelectEat />} />
                </Routes>


            </BrowserRouter>

        </>
    );
}

export default Routing;
