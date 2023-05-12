import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { calculateTotals } from "./feature/cart/cart";
import { useEffect } from "react";
import Modal from "./component/Modal";

function App() {
  const { cartItem } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
