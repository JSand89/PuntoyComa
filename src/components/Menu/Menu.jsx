import React from 'react'
import style from './Menu.module.css'

function Menu() {
    return (
        <div>
            <div className={style.boxExterior}>
            <ul className={style.menu}>
                <li ><button id='btnBlusas' type="button" className={style.menuComponent}>Blusas</button> </li>
                <li ><button id='btnPantalones' type="button" className={style.menuComponent}>Pantalones</button> </li>
                <li ><button id='btnChaquetas' type="button" className={style.menuComponent}>Chaquetas</button> </li>   
                <li ><button id='btnVestidos' type="button" className={style.menuComponent}>Vestidos</button> </li>                    
            </ul>
            </div>
        
        </div>
    )
}

export default Menu
