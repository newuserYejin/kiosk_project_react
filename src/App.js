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
import Detail_menu from './detail_menu/detail_menu';
import HelpMsg from  './help_msg/help_msg';
import Msg_Box from './messageBox/messageBox';
import SearchPage from './search/search';
import Pay_Card_e from './paycard_e/pay_card_e'
import Pay_coupon_e from './pay_coupon_e/pay_coupon_e';
import Selecteat_e from './selectEat_e/selectEat_e';
import Paymethod_e from './paymethod_e/paymethod_e';
import SelectOrder_e from'../src/selectOrder_e/selectOrder_e';
import Checklist_e from './last_cheklist_e/checklist_e';
import Checklist from './last_cheklist/checklist';

function App() {
  return (
    <>
      <SearchPage/>
    </>
  );
}

export default App;
