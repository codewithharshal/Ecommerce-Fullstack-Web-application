import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const ReletedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [releted, setReleted] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((items) => category === items.category);
      productCopy = productCopy.filter(
        (items) => subCategory === items.subCategory
      );

      setReleted(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {releted.map((items, index) => (
          <ProductItems
            key={index}
            id={items._id}
            image={items.image}
            name={items.name}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ReletedProduct;
