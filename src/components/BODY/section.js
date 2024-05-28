import React from 'react'
import style from './item.module.css'
function Section() {
  return (
  <React.Fragment>
    <section className={style.section}>

        <div className={style['section-semi']}>
        <div className={style['section-semi-img']} > 
            <img src='https://th.bing.com/th/id/OIP.Ni9EQoZZDl2FIs7oRZ7qkwHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>
        </div>
            <h1>Get Your Favourite dish from our menu
            </h1>
            <p>The best and most <span>Delicious and</span>tasty food in the planet just one away. Order now
            </p>
            <button>Order now</button>
          </div>
    </section> 

    <div className={style.main}>
       <h1> Menu</h1>
    </div>
  </React.Fragment>
  )
}

export default Section