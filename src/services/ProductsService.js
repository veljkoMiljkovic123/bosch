import axios from "axios";

class ProductsService {
  static getAllProducts = () => axios.get("src/products.json");
}

export default ProductsService;
