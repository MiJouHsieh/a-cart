import Register from './Register/Register'
import styles from './main.module.scss'
import Cart from './Cart/Cart'
import ProgressControl from './ProgressControl/ProgressControl'


export default function Main () {
  return(
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {/* register  */}
        <Register />

        {/* cart */}
        <Cart />

        {/* progress-control */}
        <ProgressControl />
      </div>
    </main>  
  )
}