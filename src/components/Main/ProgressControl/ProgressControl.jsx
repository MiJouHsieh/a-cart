import styles from './ProgressControl.module.scss'
// function PrevButton () {
//   return (
//     <button className={styles.prev}>
//       <object data="./public/icons/left-arrow.svg" className={styles.cursorPoint}>
//       </object>
//       上一步
//     </button>
//   )
// }

function NextButton () {
  return (
    <button className={styles.next}>
      下一步
      <object data="./public/icons/right-arrow.svg" className={styles.cursorPoint}>
      </object>
    </button>
  )
}

function ButtonGroup({dataPhase, children}) {
  return (
    // <section className={`${styles.buttonGroup} col col-12`} data-phase={dataPhase}>
    <section className={`${styles.buttonGroup} col col-12`} data-phase={dataPhase}>
      {children}
    </section>
  )
}

export default function ProgressControl () {
  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      
      <ButtonGroup dataPhase="address">
          <NextButton/>
      </ButtonGroup>

      {/* <ButtonGroup dataPhase="shipping">
        <PrevButton/>
        <NextButton/>
      </ButtonGroup>

      <ButtonGroup dataPhase="credit-card">
        <PrevButton/>
        <button className={styles.next}>
          確認下單
        </button>
      </ButtonGroup> */}
    </section>
  )
}