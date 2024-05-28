import React, {ReactDOM} from 'react'

import style from './Form.module.css'
import { useContextMyForm } from '../Context/TheFormContext'
function SuccessFull() {
    const {show2, setShow2} = useContextMyForm();
 
  return (
    <>
    { show2 && <div onClick={()=>setShow2(false)} className={style.theBackofS}>
  <div className={style.SuccessFull} onClick={(e)=> e.stopPropagation()}><h1>SuccessFull sent your request</h1>
     <span class="material-symbols-outlined">
  mark_email_read
  </span>
  <p> your request is being processed, you will recieve and email soon</p>
  <button onClick={()=>setShow2(false)}>Continue</button>
  
  </div>
  </div>
    }
    </>
  )
}

export default SuccessFull