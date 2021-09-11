import React from 'react'
import List from '../../productList.json'
import style from './Bag.module.css'
function Bag({props}) {
    console.log(props[0].id)
    const itemBag=List.filter(item=>item.id===props[0].id)
    console.log(itemBag[0].itemName,'itemBag')
    let itemName=itemBag[0].itemName
    let itemImage=itemBag[0].image
    let itemPrice=itemBag[0].Price
        return (
        <div>
            <ul className={style.list}>
                <li className={style.imageClothing}>Imagen</li>
                <li className={style.cardTextCursiv}>{itemName}</li>
                <li className={style.cardText}>${itemPrice}</li>
             </ul>   
        </div>
    )
}

export default Bag
