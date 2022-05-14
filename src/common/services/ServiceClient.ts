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
    console.log("ok", id);
    await API.delete(`/checkout/${id}.json`);
  }
}

export default CartService;
