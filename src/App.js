import './App.css';
import SelectOrder from '../src/selectOrder/selectorder'
import SelectEat from '../src/selectEat/selecteat'
import Routing from './Routing';
import Index from './index';
import BicOrder from '../src/BicOrder/BicOrder';
import Paymethod from '../src/paymethod/paymethod'
import OrderNum from  '../src/ordernum/ordernum'
import Pay_Card from  './pay_card/pay_card'
import Pay_Coupon from  './pay_coupon/pay_coupon'


function App() {
  return (
    <>
      <SelectOrder/>
    </>
  );
}

export default App;
