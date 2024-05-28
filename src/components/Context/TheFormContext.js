import { createContext, useContext, useState } from 'react';
const MyForm = createContext()

export const useContextMyForm = () => {
    return useContext(MyForm)
}
const ContextForm = ({children}) =>{
    const [show, setShow] = useState(false)
   const [show2, setShow2] = useState(false)
  


    return(
        <MyForm.Provider value={{show, setShow, show2, setShow2}}>
            {children}
        </MyForm.Provider>
        
    )
}

export default ContextForm
