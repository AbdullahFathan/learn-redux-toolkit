import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { calculateTotals } from "./feature/cart/cart";
import { useEffect } from "react";

function App() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
