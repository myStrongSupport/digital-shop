import React, { useState, useEffect } from "react";
import classes from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cart-slice";
import { uiActions } from "../../../store/slices/ui_slice";
import Modal from "../../../UI/Modal";
import ProductAlert from "../../Alerts/ProductAlert";

let intiall = false;
const ProductDetail = ({ data }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(+data.price);

  const totalAmountTransformed = totalAmount.toFixed(2);

  // Variables

  // Functions
  const removeQuantityHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };
  const addQuantityHandler = () => {
    if (quantity === 5) {
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addCart({
        id: data.id,
        img: data.img,
        title: data.title,
        price: data.price,
        quantity: quantity,
        totalAmount: totalAmount,
      })
    );
    dispatch(uiActions.open());
  };

  // Use Effect

  useEffect(() => {
    if (!intiall) {
      intiall = true;
      return;
    }
    setTotalAmount((prev) => quantity * +data.price);
  }, [quantity, data.price]);

  useEffect(() => {
    dispatch(uiActions.close());
  }, [dispatch]);
  // Variables
  const modalToCart = (
    <Modal>
      <ProductAlert title={data.title} img={data.img} />
    </Modal>
  );
  return (
    <section className={classes.detail}>
      {modal && modalToCart}
      <div className={` ${classes["detail-container"]}`}>
        <div className={classes.product}>
          {/* Image part */}
          <div className={classes["product-img"]}>
            <img src={data.img} alt="product img" />
          </div>
          {/* Detail Part */}
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
                        onClick={removeQuantityHandler}
                        className={classes.dec}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        className={classes.add}
                        onClick={addQuantityHandler}
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
                  <button onClick={addToCartHandler} className={classes.btn}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.trick} ${classes["product-detail"]}`}>
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
                        onClick={removeQuantityHandler}
                        className={classes.dec}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        className={classes.add}
                        onClick={addQuantityHandler}
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
                  <button onClick={addToCartHandler} className={classes.btn}>
                    Add To Cart
                  </button>
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
