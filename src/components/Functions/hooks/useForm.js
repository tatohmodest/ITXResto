import React, {createContext,useContext, useEffect, useState} from 'react'

const Formctx = createContext()

export  const useContextForm = ()=>
    {return useContext(Formctx)}

function ProviderForm(props) {
   const [data, setData] = useState(null)
   const [list , setList] = useState([])
   


   
    
   const itemData = (user)=> {
             setData(user)
             
   }

   useEffect(()=>{

    if(data !== null){
    setList(prev=>[...prev, data ])
    }

},[data])


 
  return <Formctx.Provider value={{itemData, list, setList}}>
     {props.children}
  </Formctx.Provider>
}

export default ProviderForm;