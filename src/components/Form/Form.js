import React, { useEffect, useState } from 'react'
import style from './Form.module.css'
import { useContextMyForm } from '../Context/TheFormContext'
import useRequest from '../Functions/hooks/useUser'
import { useContextForm } from '../Functions/hooks/useForm'

function Form() {
const {show, setShow, show2, setShow2} = useContextMyForm()
const {list} = useContextForm()
const [errorMessage, setErrorMessage] = useState('')
const [error, setError] = useState(false)
const [body, setBody] = useState([])
const {Fetching:sending}= useRequest()


const send = ({
    url:'https://foodapp-83f22-default-rtdb.firebaseio.com/form.json',
    body:body,
    method:'POST',
    headers: {
        'Content-Type':'appliction/json'
    }
})


const validatingName = (value)=>{
    console.log("onblur bro", value, error)
    const handleLowerCase = /[a-z]/.test(value)
    const handleUpperCase = /[A-Z]/.test(value)
    if(value.length >1 && value.length < 5){
        setErrorMessage("Name is to Short")

    }
    else if(value.length === 0){
        setErrorMessage('')
  
    }
    else if(!handleLowerCase){
        setError(true)
        setErrorMessage("Add atleast 1 lowcase (a-z)")
        
    }
    else if(!handleUpperCase){
        setError(true)
        setErrorMessage("Add atleast 1 Uppercase (A-Z)")
       
    }
    else {
        
        const valid = <div className={style.valid}>Valid</div>
        setErrorMessage(valid)
        
        
    }
}

const handleSubmit = (event) => {
    event.preventDefault()

    const formValue = new FormData(event.target)  
const fd = Object.fromEntries(formValue.entries())
console.log(fd)

setBody(prev => [...prev, {list:list,  data:fd}])

sending(send)
setShow(false)
setShow2(true)

}


 useEffect(()=>{},[body])
const isNotshowing = () => {
    setShow(false)
}
  const content = (
  <React.Fragment>
  <div className={style.FormBack} onClick={()=>isNotshowing()}>
  <form className={style.Form} onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()}>
     <div className={style.FormHeader}>
      <h1>Form Submition</h1>
     </div>
     <div className={style.theform}>
      <input
        onBlur={(e)=>validatingName(e.target.value)}
         type='text'
         id='name'
         name='named'
         placeholder='name'
         />

        {error && <div className={style.error}>{errorMessage}</div>}
         <input
         type='email'
         id='email'
         name='email'
         placeholder='example@gmail.com'
         required
         />

         <textarea name='description' placeholder='Description' >

         </textarea>
     </div>

     <button>Pay</button>
  </form>
  </div>
 </React.Fragment>
)
  return (
    <>
  {show && content}
    </>
 
  )
}

export default Form