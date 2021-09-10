import React from 'react'
import CardBag from '../CardBag/CardBag'
import style from './Card.module.css'
function Card({props}) {
    const [numberItems, setNumber ]= React.useState(0)
    const [statusAddtoCar,StatusAddCar]=React.useState("default")
    const [statusSize,changeStatusSize]=React.useState("default")

    function addCar(id){
        StatusAddCar(id)
        let idString= id.toString()
        const info={numberItems:numberItems,size:statusSize,id:id,status:statusAddtoCar}
        localStorage.setItem(idString,JSON.stringify(info))
        console.log('siSirvo',id)

    }



    return (
        <div className={style.wrap}>
            <ul className={style.list}>
                <li className={style.imageClothing}>Imagen</li>
                <li className={style.cardTextCursiv}>{props.itemName}</li>
                <li className={style.cardText}>${props.Price}</li>
                <li>
                <ul className={style.BtnsSizes}>
                    <li><button  className={style.BtnSizeActive} onClick={()=>changeStatusSize('s')}>S</button></li>
                    <li><button  className={style.BtnSize} onClick={()=>changeStatusSize('m')}>M</button></li>
                    <li><button  className={style.BtnSize} onClick={()=>changeStatusSize('l')}>L</button></li>
                    <li><button  className={style.BtnSize} onClick={()=>changeStatusSize('xl')}>XL</button></li>
                </ul>
                </li>
                <li><ul className={style.BtnsAmount}>
                <li><button  className={style.BtnPlus} onClick={()=> setNumber(numberItems===0?numberItems:numberItems-1)}>-</button></li>
                    <li className={style.Amount}>{numberItems}</li>
                    <li><button className={style.BtnPlus} onClick={()=> setNumber(numberItems+1)}>+</button></li>
                    </ul>
                </li>
                <li><button className={style.BtnsAmount} onClick={()=>addCar(props.id)}>Agregar al carro{statusAddtoCar}</button></li>
            </ul>
            <CardBag/>
        </div>

    )
}

export default Card
