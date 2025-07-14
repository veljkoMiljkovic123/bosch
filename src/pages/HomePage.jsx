import React, { useEffect, useState, useMemo } from "react";
import ProductsService from "../services/ProductsService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice";
import CardProductComponent from "../components/CardProductComponent";
import LoaderComponent from "../components/LoaderComponent";
import debounce from "lodash.debounce";

function HomePage() {
  const { allProducts } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        dispatch(saveAllProductsAction(res.data));
        setIsLoading(false);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // Debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        if (!query.trim()) {
          setFilteredProducts(allProducts);
        } else {
          const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredProducts(filtered);
        }
      }, 300),
    [allProducts]
  );

  // On input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts(allProducts);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <LoaderComponent />
      </div>
    );
  }

  return (
    <main className="container mx-auto">
      {/* Search Bar */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border px-4 py-2 rounded-md w-64"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="text-sm text-red-500 underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Result Count */}
      <div className="text-center mt-4 text-gray-700">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 && "s"}
      </div>

      {/* Products List */}
      <div className="flex flex-wrap items-center justify-center mt-6 gap-4">
        {filteredProducts.map((product, index) => (
          <CardProductComponent product={product} key={index} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
