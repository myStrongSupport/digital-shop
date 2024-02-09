import React from "react";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <section className={classes.detail}>
      <div className={` ${classes["detail-container"]}`}>
        <div className={classes.product}>
          <div className={classes["product-img"]}>
            <img
              src="https://m.media-amazon.com/images/I/61haL7447DL._AC_UY327_FMwebp_QL65_.jpg"
              alt="product img"
            />
          </div>
          <div className={classes["product-detail"]}>
            <h1>Asus G531GT</h1>
            <span>$199</span>
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
                      <button type="button" className={classes.dec}>
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={1}
                      />
                      <button type="button" className={classes.add}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className={classes["total-price"]}>
                    <label>Total Price</label>
                    <div>$480</div>
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
