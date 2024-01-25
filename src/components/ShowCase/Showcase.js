import classes from "./Showcase.module.css";
import bannerImage from "../../assets/BannerImage/HeadPhone.png";
const Showcase = () => {
  return (
    <section className={classes.showcase}>
      <div className={classes.container}>
        <div className={classes.banner}>
          <div className={classes["banner-inner"]}>
            <h5>Beats Solo</h5>
            <h4>Wireless</h4>
            <h1>
              Head<span>p</span>
              hone
            </h1>
            <div className={classes["banner-actions"]}>
              <button>Buy By Category</button>
              <div className={classes.description}>
                <h6>Description</h6>
                <p>
                  There are many variantions passages of Lorem ipsum availble.
                  But it's manatory have surffreced alteration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["banner-img"]}>
          <img src={bannerImage} alt="A Banner " />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
