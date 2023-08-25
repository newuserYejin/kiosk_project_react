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
                    <Route path="/SelectOrder" element={<SelectOrder />} />
                    <Route path="/SelectOrder_e" element={<SelectOrder_e />} />
                    <Route path="/Selecteat_e" element={<SelectEat_e/>}/>
                    <Route path="/PayCard_e" element={<PayCard_e />} />
                    <Route path="/PayCoupon_e" element={<PayCoupon_e />} />
                    <Route path="/Paymethod_e" element={<Paymethod_e/>}></Route>
                    <Route path="/Checklist_e" element={<Checklist_e/>}/>
                    <Route path="/Checklist" element={<Checklist/>}/>
                </Routes>


            </BrowserRouter>

        </>
    );
}

export default Routing;
