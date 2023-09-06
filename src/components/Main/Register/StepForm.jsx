import styles from './stepForm.module.scss'

function FormOne () {
  return (
    <>
      <div className="col col-12">
          <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select>
                <option value="mr" selected>先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
            <div className={styles.inputLabel}>姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
      </div>
      <div className="col col-12">
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
          <div className={styles.inputLabel}>電話</div>
          <input type="tel" placeholder="請輸入行動電話" />
        </div>
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
          <div className={styles.inputLabel}>Email</div>
          <input type="email" placeholder="請輸入電子郵件" />
        </div>
      </div>
      <div className="col col-12">
        <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
          <div className={styles.inputLabel}>縣市</div>
          <div className={styles.selectContainer}>
            <select required>
              <option value="">請選擇縣市</option>
              <option value="KLU">基隆市</option>
              <option value="TPH">新北市</option>
              <option value="TPE">臺北市</option>
              <option value="TYC">桃園市</option>
              <option value="HSH">新竹縣</option>
              <option value="HSC">新竹市</option>
              <option value="MAC">苗栗市</option>
              <option value="MAL">苗栗縣</option>
              <option value="TXG">臺中市</option>
              <option value="CWH">彰化縣</option>
              <option value="CWS">彰化市</option>
              <option value="NTC">南投市</option>
              <option value="NTO">南投縣</option>
              <option value="YLH">雲林縣</option>
              <option value="CHY">嘉義縣</option>
              <option value="CYI">嘉義市</option>
              <option value="TNN">臺南市</option>
              <option value="KHH">高雄市</option>
              <option value="IUH">屏東縣</option>
              <option value="PTS">屏東市</option>
              <option value="ILN">宜蘭縣</option>
              <option value="ILC">宜蘭市</option>
              <option value="HWA">花蓮縣</option>
              <option value="HWC">花蓮市</option>
              <option value="TTC">臺東市</option>
              <option value="TTT">臺東縣</option>
              <option value="PEH">澎湖縣</option>
              <option value="KMN">金門縣</option>
              <option value="LNN">連江縣</option>
            </select>
          </div>
        </div>
        <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
          <div className={styles.inputLabel}>地址</div>
          <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </>
  )
}
// function FormTwo () {
//   return (
//     <>
//       <label className={`${styles.radioGroup} col col-12`} data-price="0">
//         <input id="shipping-standard" type="radio" name="shipping"  checked/>
//         <div className={styles.radioInfo}>
//           <div className="col col-12">
//             <div className={styles.text}>標準運送</div>
//             <div className={styles.price}></div>
//           </div>
//           <div className={`${styles.period} col col-12`}>約 3~7 個工作天</div>
//         </div>
//         <div className={styles.radioBoxBorder}></div>
//       </label>
//       <label className={`${styles.radioGroup} col col-12`} data-price="500">
//         <input id="shipping-dhl" type="radio" name="shipping" />
//         <div className={styles.radioInfo}>
//           <div className="col col-12">
//             <div className={styles.text}>DHL 貨運</div>
//             <div className={styles.price}></div>
//           </div>
//           <div className={`${styles.period} col col-12`}>48 小時內送達</div>
//         </div>
//         <div className={styles.radioBoxBorder}></div>
//       </label>
//     </>
//   )
// }
// function FormThree () {
//   return (
//     <>
//       <div className="col col-12">
//         <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
//           <div className={styles.inputLabel}>持卡人姓名</div>
//           <input type="text" placeholder="John Doe" />
//         </div>
//       </div>
//       <div className="col col-12">
//         <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
//           <div className={styles.inputLabel}>卡號</div>
//           <input type="text" placeholder="1111 2222 3333 4444" />
//         </div>
//       </div>
//       <div className="col col-12">
//         <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
//           <div className={styles.inputLabel}>有效期限</div>
//           <input type="text" placeholder="MM/YY" />
//         </div>
//         <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
//           <div className={styles.inputLabel}>CVC / CCV</div>
//           <input type="text" placeholder="123" />
//         </div>
//       </div>
//     </>
//   )
// }

//  <section className={`${styles.formContainer} col col-12`}>

function Form({dataPhase, formTitle, children}) {
  return(
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className={styles.formTitle}>{formTitle}</h3>
      <section className={`${styles.formBody} col col-12`}>
        {children}
      </section>
    </form>
  )
}

export default function StepForm () {
  return (
    <>
      <Form
        dataPhase="address"
        formTitle="寄送地址"
      >
        <FormOne/>
      </Form>
      {/*  shipping phase */}
      {/* <Form
        dataPhase="shipping"
        formTitle="運送方式"
      >
        <FormTwo/>
      </Form> */}
      {/* credit-card phase  */}
      {/* <Form
        dataPhase="credit-card"
        formTitle="付款資訊"
      >
        <FormThree/>
      </Form> */}
    </>
  )
}