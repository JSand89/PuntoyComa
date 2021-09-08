import React from 'react'
import CardBag from '../CardBag/CardBag'
import style from './Card.module.css'
function Card({props}) {
    const [number, setNumber ]= React.useState(0)
    const [statusAddtoCar,StatusAddCar]=React.useState("default")
    const [status,changeStatusSize]=React.useState("default")



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
                <li><button  className={style.BtnPlus} onClick={()=> setNumber(number===0?number:number-1)}>-</button></li>
                    <li className={style.Amount}>{number}</li>
                    <li><button className={style.BtnPlus} onClick={()=> setNumber(number+1)}>+</button></li>
                    </ul>
                </li>
                <li><button className={style.BtnsAmount} onClick={()=>StatusAddCar(props.id)}>Agregar al carro</button></li>
            </ul>
            <CardBag props={statusAddtoCar}/>

        </div>

    )
}

export default Card
