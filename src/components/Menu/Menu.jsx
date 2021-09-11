import React, { useContext } from 'react'
import style from './Menu.module.css'
import Cards from '../Cards/Cards'

function Menu(props) {
    let [status,changeStatus]=React.useState("default")
    //console.log(status)
    //const { obj } = useContext(Carrito)//console.log(memoryDad,'obt2Menu')
   // const a=useContext(MemoryContext.Provider)
   // console.log(a)


    return (
        <div>
            <ul>
                <li><button className={style.menuComponent} onClick={()=>changeStatus('default')} >Logo</button></li>
                <li><button className={style.menuComponent} onClick={()=>console.log('default')} >carrito</button></li>
            </ul>
            <div className={style.boxExterior}>
            <ul className={style.menu}>
                <li ><button className={style.menuComponent} onClick={()=>changeStatus('0')} >Blusa</button> </li>
                <li ><button className={style.menuComponent} onClick={()=>changeStatus('1')}>Pantalones</button> </li>
                <li ><button className={style.menuComponent} onClick={()=>changeStatus('2')}>Chaquetas</button> </li>   
                <li ><button className={style.menuComponent} onClick={()=>changeStatus('3')}>Vestidos</button> </li>                    
            </ul>
            </div>
            <Cards props={status}/>
        </div>
        
    )
}

export default Menu
