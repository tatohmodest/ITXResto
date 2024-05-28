import React, { useEffect, useState } from 'react'
import style from './item.module.css'
import useForm, { useContextForm } from '../Functions/hooks/useForm';
import useRequest from '../Functions/hooks/useUser';
function Items(){
    
const [list , setList] = useState([])
const [meTop, setMeTop] = useState({})
const {itemData: itemfun, list:themain, setList:setTheMain} = useContextForm()

const [checkButton, setCheckButton] = useState([])
  

const {data, Fetching:TheFetch,error, isLoading}=useRequest()
        const responding = {
            url: 'https://foodapp-83f22-default-rtdb.firebaseio.com/food.json',
           
            }
      useEffect(()=>{
  
        TheFetch(responding)
      },[TheFetch]);



  useEffect(()=>{
   
    const listOfFood = []
    //extracing the data recieved through the request
    for(var key in data){
       const me = data[key]
       me.forEach((item, index) => {
           listOfFood.push({
               id: index,
               price: item.price,
               description: item.description,
               nameOfItem: item.nameOfItem,
               image: item.image,
               amount:item.amount
           });
       });
   };
  console.log(checkButton, 'nootime')
   console.log(themain,'heybudy')
   setList(listOfFood);
   setCheckButton(themain)

  },[data, themain])



      const takeMeup = (image, price, nameOfItem, amount, id) => {
        setMeTop(prev=>({...prev, image:image,price:price, nameOfItem:nameOfItem ,amount:amount, id:id}))
      }


      const handleSubmit = (e) => {
       e.preventDefault()
     
       itemfun(meTop)

       

      }
     
  
  const DeleteItem = (id) =>{
      console.log(id)
         const index = themain.findIndex(e=> e.id === id)
     if(index !== -1){
         const update = [...themain]
         const dlete = update.filter(e => e.id !== id);
         setTheMain(dlete)
         console.log(dlete, 'delete')
     }


  }

    let itemsmap= <p>No data found</p>

      if(isLoading) {

       itemsmap =
     
       <div className={style.containerq}>
     <div className={style.container}>
       <div className={style.slice}></div>
       <div className={style.slice}></div>
       <div className={style.slice}></div>
       <div className={style.slice}></div>
       <div className={style.slice}></div>
       <div className={style.slice}></div>
     </div>
       </div>
   
     
      }

      else if(error){
        itemsmap = <p>{error}</p>  
      }
      else if (list.length > 0){

        itemsmap = list.map((item, index)=>(
            <li key={index}>
            <form onSubmit={handleSubmit}>
      
      <div className={style.image}>
          <img src={item.image}/>
      </div>
      <div className={style.itemstart} >
      <div className={style.nameOfItem}>{item.nameOfItem}</div>
      <div className={style.price}>${item.price}</div>
      <div className={style.description}>
    {item.description}
      </div>
  { checkButton && checkButton.some(it=> it.nameOfItem === item.nameOfItem ) ?

    (<button
    type='button'
    onClick={()=> DeleteItem(item.id)}
    
    >Remove Item</button>):
    (
      
      <button 
    type='submit'
     onClick={()=>takeMeup(item.image, item.price, item.nameOfItem, item.amount,item.id)}>Add to cart</button>
     )
   
  }
   
     
    </div>
    </form>
            </li>
          ))
      }


 

  return (
    <div className={style.closet}>
         <ul>
        {itemsmap}
    </ul>
    
    </div>
   
  )
}

export default Items