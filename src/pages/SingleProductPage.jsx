import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductsService from "../services/ProductsService";
import LoaderComponent from "../components/LoaderComponent";
import { useDispatch } from "react-redux";
import { saveInCartAction } from "../store/cartSlice";

function SingleProductPage() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        if (!res) {
          setNotFound(true);
          setIsLoading(false);
          return;
        }
        setSingleProduct(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setNotFound(true);
        setIsLoading(false);
      });
  }, [productId]);

  //handleAddToCart
  function handleAddToCart() {
    dispatch(saveInCartAction(singleProduct));
  }

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  if (isLoading)
    return (
      <div className="flex">
        <LoaderComponent />
      </div>
    );

  if (notFound || !singleProduct)
    return (
      <div className="text-center py-20 text-2xl text-red-600 font-semibold">
        Product not found (404)
      </div>
    );

  return (
    <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-10">
      {/* Left side - Images */}
      <div className="">
        <img
          className="w-[600px] h-[400px] object-contain rounded-lg"
          src={`/${singleProduct.images[currentImage]}`}
          alt={singleProduct.name}
        />
        <div className="flex flex-wrap items-center gap-5 mt-4">
          {singleProduct.images.map((imgSrc, index) => (
            <img
              src={`/${imgSrc}`}
              key={index}
              alt={`Thumbnail ${index + 1}`}
              className={`w-[150px] h-[150px] object-cover rounded-xl cursor-pointer transition-all duration-200 ${
                currentImage === index
                  ? "border-4 border-blue-600"
                  : "border border-gray-300 hover:border-blue-400"
              }`}
              onClick={() => handleCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Right side - Info */}
      <div className="w-full md:w-1/2">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link to="/products" className="text-blue-600 hover:underline">
            Products
          </Link>{" "}
          &gt;{" "}
          <span className="font-semibold text-gray-800">
            {singleProduct.name}
          </span>
        </nav>

        {/* Title & Price */}
        <h1 className="text-2xl font-bold mb-2">{singleProduct.name}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          ${singleProduct.price.toFixed(2)}
        </p>

        {/* Full description */}
        <p className="text-gray-700 mb-6">{singleProduct.fullDescription}</p>

        {/* Technical specifications */}
        <h2 className="text-lg font-semibold mb-2">
          Technical Specifications:
        </h2>
        <table className="mb-6 w-full text-sm border">
          <tbody>
            {Object.entries(singleProduct.technicalSpecifications).map(
              ([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 px-3 font-medium capitalize text-gray-600">
                    {key}
                  </td>
                  <td className="py-2 px-3 text-gray-800">{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {/* Add to Cart */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="bg-yellow-600 px-4 py-2 text-white rounded-lg mb-2  cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
