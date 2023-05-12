import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { calculateTotals, getCartItems } from "./feature/cart/cart";
import { useEffect } from "react";
import Modal from "./component/Modal";

function App() {
  const { cartItem, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
