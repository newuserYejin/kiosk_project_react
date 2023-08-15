import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectEat from './selectEat/selecteat'
import BigOrder from   './BicOrder/BicOrder'
import App from './App'


function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Selecteat" element={<SelectEat />} />
                    <Route path="/BigOrder" element={<BigOrder />} />
                </Routes>


            </BrowserRouter>

        </>
    );
}

export default Routing;
