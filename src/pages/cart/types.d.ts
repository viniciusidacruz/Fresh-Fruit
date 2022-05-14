export interface CartItemProps {
  category: string;
  id: number;
  prices: {
    offer: boolean;
    price: number;
  };
  thumbnail: {
    alt: string;
    path: string;
  };
  title: string;
}
