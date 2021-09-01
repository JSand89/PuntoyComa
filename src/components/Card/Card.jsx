import React from 'react'
import style from './Card.module.css'

function Card() {
    return (
        <div className={style.wrap}>
            <ul className={style.list}>
                <li>Imagen</li>
                <li>Nombre de la prenda</li>
                <li>Valor</li>
                <li>
                <ul className={style.BtnsSizes}>
                    <li><button type="button" id="btnSizeS" className={style.BtnSize}>S</button></li>
                    <li><button type="button" id="btnSizeM" className={style.BtnSize}>M</button></li>
                    <li><button type="button" id="btnSizeL" className={style.BtnSize}>L</button></li>
                    <li><button type="button" id="btnSizeXL" className={style.BtnSize}>XL</button></li>
                </ul>
                </li>
                <li><ul className={style.BtnsSizes}>
                <li><button type="button" id="btnLess">-</button></li>
                    <li>#</li>
                    <li><button type="button" id="btnPluss">+</button></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default Card
