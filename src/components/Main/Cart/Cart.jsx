import styles from './cart.module.scss'

export default function Cart() {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>

          <section className={`${styles.productList} col col-12`} data-total-price="0">
            <div className={`${styles.productContainer} col col-12`} data-count="0" data-price="3999">
              <img className={styles.imgContainer} src="./images/product-1.png" alt="product-1"/>
              <div className={styles.productInfo}>
                <div className={styles.productName}>破壞補丁修身牛仔褲</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <img className={`${styles.productAction} minus`} src="./icons/minus.svg" alt="icon-minus" />
                    
                    <span className={styles.productCount}>0</span>
                    <img className={`${styles.productAction} plus`} src="./icons/plus.svg" alt="icon-plus" />
                  </div>
                </div>
                <div className={styles.price}>$0</div>
              </div>
            </div>
            <div className={`${styles.productContainer} col col-12`} data-count="0" data-price="1299">
              <img className={styles.imgContainer} src="./images/product-2.png" alt="product-2"/>
              <div className={styles.productInfo}>
                <div className={styles.productName}>刷色直筒牛仔褲</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <img className={`${styles.productAction} minus`} src="./icons/minus.svg" alt="icon-minus" />
                    
                    <span className={styles.productCount}>0</span>
                    <img className={`${styles.productAction} plus`} src="./icons/plus.svg" alt="icon-plus" />
                  </div>
                </div>
                <div className={styles.price}>$0</div>
              </div>
            </div>
    </section>

    <section className={`${styles.cartInfo} shipping col col-12`}>
      <div className={styles.text}>運費</div>
      <div className={styles.price}>免費</div>
    </section>

    <section className={`${styles.cartInfo} total col col-12`}>
      <div className={styles.text}>小計</div>
      <div className={styles.price}>$0</div>
    </section>
  </section>

  )
}