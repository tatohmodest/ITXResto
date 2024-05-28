import React, { useCallback, useEffect, useState } from 'react';
import style from './headerstyle/CartButton.module.css';
import useForm, { useContextForm } from '../Functions/hooks/useForm';
import { useContextMyForm } from '../Context/TheFormContext';

function Cart({ closeModal }) {
    const { list, setList } = useContextForm();
    const [isNotempty, setIsNotEmpty] = useState(false)
    const [total, setTotal] = useState(0)
    const [amountt, setAmountt] = useState(0)
     const {setShow} = useContextMyForm()
 
     const isShowing = () =>{
                list.push({total})
                 setShow(true)
                 closeModal()
                 console.log(list)
     }
useEffect(()=>{
  if(list && list.length > 0){
    setIsNotEmpty(true)
  }
  else if(list.length === 0){
    setIsNotEmpty(false)
  }

  const totalAmount = list.reduce((acc, curr)=> acc + (curr.price * curr.amount), 0)
setTotal(totalAmount)
const amount =list.reduce((acc, curr)=> acc + curr.amount ,0)
setAmountt(amount )

},[list])

const deleteMe = (id) => {
  const index = list.findIndex(e => e.id === id)
  if(index !== -1){
    const update = [...list]
    const updating = update.filter(e => e.id !== id);
    setList(updating)
  }
}
const Add = (id) => {
  setList((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount < 6 ? item.amount + 1 : item.amount,
          }
        : item
    )
  );
};

const Rmove = (id) => {
  setList((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            amount: item.amount > 1 ? item.amount - 1 : item.amount,
          }
        : item
    )
  );
};

    console.log(list, "hello");

    const addedItem = list.map((item) => (
        <li key={item.id} className={style.item}>  
         <div className={style.closi} onClick={()=>deleteMe(item.id)}>
         <span class="material-symbols-outlined">
close
</span>
          </div>
            <div className={style.bigImg}>
                <div className={style.imagi}> <img src={item?.image || './download(1).jpeg'} alt='no image' /></div>
                <div className={style.imagi2}>{item.nameOfItem}</div>
          
            <div className={style.imagi3}>$
              {item.price}</div>
            </div>

            <div className={style.Amount}>
              <button className={style.add} type='button' onClick={()=> Add(item.id)}>+</button>
                  {item.amount}
                  <button className={style.remove} onClick={()=> Rmove(item.id)}>-</button>
             </div>
        </li>
    ));

    const content = (
        <div className={style.cartcover} onClick={closeModal}>
            <div className={style.cart} onClick={(e) => e.stopPropagation()}>
         <div className={style.hold} onClick={closeModal}>  <span class="material-symbols-outlined">
close
</span> </div> 
                <h1>Cart</h1>
                
                <ul className={style.ully}>
                    {isNotempty && addedItem}
                    {!isNotempty && <h3>No items found</h3>}
                </ul>
                 <div className={style.allOfthem}>
                 { list.length === 0 ? <button onClick={()=>alert("Cart is Empty")}>Buy</button>: <button onClick={()=>isShowing()}>Buy</button>
                  }
                <div> 
                  <table>
                    <tr>
                      <th>Amount</th>
                      <th rowSpan='1'>Total</th>
                    </tr>
                    <tr>
                    <td>{amountt}</td>
                    <td colSpan='2'>${total}</td>
                    </tr>
                  </table>
                </div>
            </div>
        </div>
        </div>
    );

    return content;
}

export default Cart;
