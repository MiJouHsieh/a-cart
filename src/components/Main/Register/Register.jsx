import StepProgress from './StepProgress.jsx'
import StepForm from './StepForm.jsx'
import styles from './register.module.scss'

export default function Register() {
  return(
    <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      {/* <!-- register-title --> */}
      {/*  <h2 className={`${registerTitle} col col-12｝>結帳</h2> */}
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>

      {/* <!-- register-progress --> */}
      <StepProgress/>

      {/* <!-- register-form --> */}
      <section className={`${styles.formContainer} col col-12`}>
        {/* <!-- address phase --> */}
        <StepForm/>
      </section> 
    </section>
  )
}

