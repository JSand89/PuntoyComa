import React, { useEffect }from 'react'
import style from './Card.module.css'
function Card({props}) {
    const colorDefault={color:'#264B66',BackColor:'#D8CFC3'}
    const colorActive={color:'#D8CFC3',BackColor:'#264B66'}
    const [numberItems, setNumber ]= React.useState(0)
    const [statusAddtoCar,StatusAddCar]=React.useState("default")
    const [statusSize,changeStatusSize]=React.useState('default')

    //-----change color buttons size

    const [sizeColorS,changeColorSizeS]=React.useState(colorDefault)
    const [sizeColorM,changeColorSizeM]=React.useState(colorDefault)
    const [sizeColorL,changeColorSizeL]=React.useState(colorDefault)
    const [sizeColorXL,changeColorSizeXL]=React.useState(colorDefault)



    function addCar(id){
        StatusAddCar(id)
        let idString= id.toString()
        const info={numberItems:numberItems,size:statusSize,id:id,status:statusAddtoCar}
        localStorage.setItem(idString,JSON.stringify(info))
        console.log('siSirvo',id)

    }
    useEffect(()=>{
        switch (statusSize) {
            case 's':
                changeColorSizeS(colorActive)
                changeColorSizeM(colorDefault)
                changeColorSizeL(colorDefault)
                changeColorSizeXL(colorDefault)
                break;
            case 'm':
                changeColorSizeS(colorDefault)
                changeColorSizeM(colorActive)
                changeColorSizeL(colorDefault)
                changeColorSizeXL(colorDefault)
                break;
           case 'l':
                changeColorSizeS(colorDefault)
                changeColorSizeM(colorDefault)
                changeColorSizeL(colorActive)
                 changeColorSizeXL(colorDefault)
                break;        
            case 'xl':
                changeColorSizeS(colorDefault)
                changeColorSizeM(colorDefault)
                changeColorSizeL(colorDefault)
                changeColorSizeXL(colorActive)
                break;        
            default:
                changeColorSizeS(colorDefault)
                changeColorSizeM(colorDefault)
                changeColorSizeL(colorDefault)
                changeColorSizeXL(colorDefault)
                break;
        }
    },[statusSize])


    return (
        <div className={style.wrap}>
            <ul className={style.list}>
                <li className={style.imageClothing}><img src={props.image} alt="imagen"/></li>
                <li className={style.cardTextCursiv}>{props.itemName}</li>
                <li className={style.cardText}>${props.Price}</li>
                <li>
                <ul className={style.BtnsSizes}>
                    <li><button  className={style.BtnSize} style={{color:sizeColorS.color,backgroundColor:sizeColorS.BackColor}} onClick={()=>changeStatusSize('s')}>S</button></li>
                    <li><button  className={style.BtnSize} style={{color:sizeColorM.color,backgroundColor:sizeColorM.BackColor}} onClick={()=>changeStatusSize('m')}>M</button></li>
                    <li><button  className={style.BtnSize} style={{color:sizeColorL.color,backgroundColor:sizeColorL.BackColor}} onClick={()=>changeStatusSize('l')}>L</button></li>
                    <li><button  className={style.BtnSize}  style={{color:sizeColorXL.color,backgroundColor:sizeColorXL.BackColor}} onClick={()=>changeStatusSize('xl')}>XL</button></li>
                </ul>
                </li>
                <li><ul className={style.BtnsAmount}>
                <li><button  className={style.BtnPlus} onClick={()=> setNumber(numberItems===0?numberItems:numberItems-1)}>-</button></li>
                    <li className={style.Amount}>{numberItems}</li>
                    <li><button className={style.BtnPlus} onClick={()=> setNumber(numberItems+1)}>+</button></li>
                    </ul>
                </li>
                <li><button className={style.BtnsAmount} onClick={()=>addCar(props.id)}>Agregar al carro</button></li>
            </ul>
        </div>

    )
}

export default Card
