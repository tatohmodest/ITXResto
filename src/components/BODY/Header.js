import React from 'react'
import style from './headerstyle/Header.module.css';
import logo from './headerimg/logo.png'
import CartButton from './CartButton';
import Form from '../Form/Form';
import ReactDOM from 'react-dom'
import SuccessFull from '../Form/SuccessFull';
function Header() {
  const modal2 = document.getElementById('success')
    
  const modal = document.getElementById('form')
  return (
    <div>
        <header>
            <div className={style.logo}>
                <h1>ITX Food</h1>
                <div className={style.round}>
                  <img src={logo} alt='No Logo' />
                </div>
                </div>
            <div className={style.image}>
             <CartButton />
            </div>
        </header>
        { modal && ReactDOM.createPortal(<Form/>, modal)
        }
        {modal2 && ReactDOM.createPortal(<SuccessFull/>, modal2)}
    </div>
  )
}

export default Header