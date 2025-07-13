import React, { useEffect } from "react";
import ProductsService from "../services/ProductsService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice";
import SingleProductPage from "./SingleProductPage";
import CardProductComponent from "../components/CardProductComponent";
function HomePage() {
  //1 step- ???? useSelector
  const { allProducts } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => dispatch(saveAllProductsAction(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="container mx-auto">
      <div>
        {allProducts.map((product, index) => {
          return <CardProductComponent product={product} key={index} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
