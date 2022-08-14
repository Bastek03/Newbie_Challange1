import React from "react";
import styles from './App.module.css';
import desktopImage from './img/image-product-desktop.jpg';
import mobileImage from './img/image-product-mobile.jpg';
import cartImage from './img/icon-cart.svg';

function App() {

  return (
    <div className={styles.App}>

      <div className={styles.wrapper}>

          <picture>
            <source srcSet={mobileImage} media="(max-width: 950px)"></source>
            <img src={desktopImage} alt="perfume" className={styles.desktopImg}></img>
          </picture>

        <div className={styles.content}>

          <h4>Perfume</h4>

          <h1>Gabrielle Essence Eau De Parfum</h1>

          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>

          <div className={styles.price}>
            <h2>$149.99</h2>
            <h5>$169.99</h5>
          </div>

          <button className={styles.button}>
            <img src={cartImage} alt="cart"></img>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
