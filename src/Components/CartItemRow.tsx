import type { CartItem, Product } from "./Types";

type Props = {
    item: CartItem
    products: Product[]
};

export default function CartItemRow({ item, products }: Props) {
  const product = products.find(p => p.id === item.productId)
  return (
    <tr>
      <td>{product?.name || "Product Not Found"}</td>
      <td>${product?.price.toFixed(2)}</td>
      <td>{item.amount}</td>
    </tr>
  );
}
