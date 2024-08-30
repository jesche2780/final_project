import { useEffect, useState } from "react";
import type { CartItem, Product } from "./Types";
import CartItemRow from "./CartItemRow";

export default function CartList() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/cart");
        if (!response.ok) {
          setErrorMessage(response.statusText);
        } else {
          const data = await response.json();
          setCartItems(data);
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchCart();
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/products");

        if (!response.ok) {
          setErrorMessage("Mistake somewhere in here..." + response.statusText);
        } else {
          const data = await response.json();
          setProducts(data);
          setErrorMessage("");
        }
      } catch (error: any) {
        setErrorMessage("Mistake somewhere in here..." + error.message);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="display-5 mb-4">Cart</h2>
      {loading ? (
        <p className="text-body-tertiary ">Loading...</p>
      ) : errorMessage ? (
        <p className="text-danger">{errorMessage}</p>
      ) : (
        <table className="table table-striped">
          <tbody>
            {cartItems.map((item) => (
              <CartItemRow item={item} key={item.id} products={products} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
