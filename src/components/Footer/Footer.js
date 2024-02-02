import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import img from "../../assets/Logo.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes["footer-container"]}`}>
        <div className={classes["footer-logo"]}>
          <div>
            <img src={img} alt="" />
          </div>
          <p>
            There are many variants passages of lorem availble , but the
            majority have
          </p>
          <div className={classes["footer-social"]}>
            <ul className={classes["footer-social_list"]}>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
              <li>
                <AiFillFacebook />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["footer-Links"]}>
          <h4>Ouick Links </h4>
          <ul className={classes["quick-links"]}>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes["footer-contact"]}>
          <h4>Contact</h4>
          <p>
            +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
            Grepevine Nashville , Tx 76051{}
          </p>
        </div>
        <div className={classes["footer-subscribe"]}>
          <h4>Subscribe to Our Email</h4>
          <h3>For latest news & updates</h3>
          <form className={classes.form}>
            <div className={classes["form-container"]}>
              <input type="text" />
              <button className={classes.btn}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
