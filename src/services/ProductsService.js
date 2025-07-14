import axios from "axios";

class ProductsService {
  static getAllProducts = () => axios.get("/products.json");

  static getSingleProduct = async (productId) => {
    const response = await axios.get("/products.json");
    const products = response.data;

    return products.find(
      (p) => p.id === productId || p.id === Number(productId)
    );
  };
}

export default ProductsService;
