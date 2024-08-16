import React from "react";
import img from "../../assets/About/contact.jpg";
import classes from "./About.module.css";
function Contact() {
  return (
    <section>
      <div className={`container ${classes.container}`}>
        <div className={classes["contact_img"]}></div>
        <div className={classes["about_content"]}>
          <h4>Contact Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ullam labore ipsam voluptatum temporibus accusantium. Dolores
            perferendis totam, deleniti optio, facilis voluptates nesciunt
            maiores recusandae saepe dolor fugit. Delectus sed suscipit aliquam
            rerum, reprehenderit ipsum. Ab suscipit quisquam eius rem blanditiis
            excepturi nemo quia et, dolor distinctio facilis aperiam impedit
          </p>
          <div className={classes.contact}>
            <div className={classes["contact-inner"]}>
              <div className={classes.head}>Email :</div>
              <div>HamedRoadLigh@gmail.com</div>
            </div>
            <div className={classes["contact-inner"]}>
              <div className={classes.head}>phone Number :</div>
              <div>09330044971</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
