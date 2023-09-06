import styles from './StepProgress.module.scss'
function ProgressGroup ({dataPhase, stepNumber, stepTitle}) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{stepNumber}</span>
      </span>
      <span className={styles.progressLabel}>{stepTitle}</span>
    </span>
  )
}

export default function StepProgress () {
  return(
    <section className={`${styles.progressContainer} col col-12`}>
      <ProgressGroup 
        dataPhase="address"
        stepNumber={1}
        stepTitle="寄送地址"
      />
      <span className={styles.progressBar} data-order="1"></span>
      <ProgressGroup 
        dataPhase="shipping"
        stepNumber={2}
        stepTitle="運送方式"
      />
      <span className={styles.progressBar} data-order="2"></span>
      <ProgressGroup 
        dataPhase="credit-card"
        stepNumber={3}
        stepTitle="付款資訊"
      />
    </section>
  )
}