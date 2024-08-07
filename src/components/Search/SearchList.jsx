import React from "react";
import ProductItem from "../Products/ProductItem";
import classes from "./SearchList.module.css";
import { LayoutGroup, motion } from "framer-motion";
const SearchList = ({ filteredList }) => {
  return (
    <div className={classes["search-list"]}>
      <div layout className={classes["search-list-container"]}>
        <LayoutGroup>
          {filteredList.map((product) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              layout
            >
              <ProductItem
                className="static"
                key={product.id}
                id={product.id}
                type={product.category}
                title={product.title}
                price={product.price}
                link={product.img}
              />
            </motion.div>
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default SearchList;
