import { API } from "./api";

class CartService {
  async addToCart(value: {}) {
    const response = await API.post("/checkout.json", value);
    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error();
    }
  }

  async removeCart(id: string) {
    const response = await API.delete(`/checkout/${id}.json`);
    const { data } = response;

    if (data) {
      return data;
    } else {
      throw new Error();
    }
  }
}

export default CartService;
