import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectEat from './selectEat/selecteat'
import SelectEat_e from './selectEat_e/selectEat_e'
import BigOrder from   './BicOrder/BicOrder'
import SelectOrder from './selectOrder/selectorder'
import SelectOrder_e from './selectOrder_e/selectOrder_e'
import PayCard_e from './paycard_e/pay_card_e'
import PayCoupon_e from './pay_coupon_e/pay_coupon_e'
import Paymethod_e from './paymethod_e/paymethod_e'
import Checklist_e from './last_cheklist_e/checklist_e'
import Checklist from './last_cheklist/checklist'
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
                    <Route path="/Paymethod_e" element={<Paymethod_e/>}/>
                    <Route path="/Checklist_e" element={<Checklist_e/>}/>
                    <Route path="/Checklist" element={<Checklist/>}/>
                </Routes>


            </BrowserRouter>

        </>
    );
}

export default Routing;
