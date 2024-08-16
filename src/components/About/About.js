import React from "react";
import img from "../../assets/About/about.jpg";
import classes from "./About.module.css";
function About() {
  return (
    <section>
      <div className={`container ${classes.container}`}>
        <div className={classes["about_img"]}></div>
        <div className={classes["about_content"]}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ullam labore ipsam voluptatum temporibus accusantium. Dolores
            perferendis totam, deleniti optio, facilis voluptates nesciunt
            maiores recusandae saepe dolor fugit. Delectus sed suscipit aliquam
            rerum, reprehenderit ipsum. Ab suscipit quisquam eius rem blanditiis
            excepturi nemo quia et, dolor distinctio facilis aperiam impedit
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            ullam labore ipsam voluptatum temporibus accusantium. Dolores
            perferendis totam, deleniti optio, facilis voluptates nesciunt
            maiores recusandae saepe dolor fugit. Delectus sed suscipit aliquam
            rerum, reprehenderit ipsum. Ab suscipit quisquam eius rem blanditiis
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
