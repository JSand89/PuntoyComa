import React from 'react'
import style from './Footer.module.css'

function Footer() {
    return (
        <div>
            <div >
                <ul className={style.topBox}>
                    <li className={style.textItalic}>CARACTER ARTESANAL</li>
                    <li className={style.text}>EL BUEN DISEÑO MEJORA CON EL TIEMPO</li>
                </ul>
            </div>
            <div >
                <ul className={style.bootBox}>
                    <li className={style.textCR}>Copyright 2021 Punto y Coma.Todos los derechos reservados</li>
                    <li className={style.textCR}>Desarrollado por Javier Sanchez</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
