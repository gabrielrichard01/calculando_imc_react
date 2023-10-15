import { useState } from 'react'

import ImcCalculador from './components/Imc'
import styles from './components/Imc.module.css';
function App (){
  return(
    <div className={styles.calculadora}>
      <ImcCalculador/>
    </div>
  )
}

export default App