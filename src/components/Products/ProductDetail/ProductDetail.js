import React, { useState, useEffect } from "react";
import classes from "./ProductDetail.module.css";

let intiall = false;
const ProductDetail = ({ data }) => {
  const [amount, setAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(+data.price);

  const totalAmountTransformed = totalAmount.toFixed(2);

  // Variables

  // Functions
  const removeAmountHandler = () => {
    if (amount === 1) {
      return;
    }
    setAmount((prev) => prev - 1);
  };
  const addAmountHandler = () => {
    if (amount === 5) {
      return;
    }
    setAmount((prev) => prev + 1);
  };

  useEffect(() => {
    if (!intiall) {
      intiall = true;
      return;
    }
    setTotalAmount((prev) => amount * +data.price);
  }, [amount, data.price]);
  return (
    <section className={classes.detail}>
      <div className={` ${classes["detail-container"]}`}>
        <div className={classes.product}>
          <div className={classes["product-img"]}>
            <img src={data.img} alt="product img" />
          </div>
          <div className={classes["product-detail"]}>
            <h1>{data.title}</h1>
            <span>${data.price}</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              illo tenetur iusto consequatur voluptate tempora reprehenderit
              modi, maxime, nisi enim accusamus laudantium, expedita hic facilis
              blanditiis incidunt? Delectus, tempora perspiciatis.
            </p>
            <div>
              <div className={classes.form}>
                <div className={classes["form-container"]}>
                  <div className={classes["form-control"]}>
                    <label>Quantity</label>
                    <div className={classes["ctr-btn_inner"]}>
                      <button
                        type="button"
                        onClick={removeAmountHandler}
                        className={classes.dec}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={amount}
                        value={amount}
                      />
                      <button
                        type="button"
                        className={classes.add}
                        onClick={addAmountHandler}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={classes["total-price"]}>
                    <label>Total Price</label>
                    <div>{totalAmountTransformed}</div>
                  </div>
                </div>
                <div className={classes["form-btn"]}>
                  <button className={classes.btn}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
