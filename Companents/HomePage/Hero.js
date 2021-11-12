import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ari.jpg"
          alt="an image that showing max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hassan Ajdour .</h1>
      <p>I'm a Software Developer & Instructor At DieseAcademy .</p>
    </section>
  );
}

export default Hero;
