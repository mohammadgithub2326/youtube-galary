import Card from "./Youtube_gallary"
import styles from "./app.module.css"

const App = (props)=>{
  const {data} = props

  return ( 
    <div className={styles.gallry_container}>
           {data.map(obj => <Card videoData={obj} />)} 
    </div>
  )

}
export default App