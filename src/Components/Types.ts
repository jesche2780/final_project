export type CartItem = {
  id: number;
  productId: number;
  amount: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
};
