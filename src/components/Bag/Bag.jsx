import React, { useEffect}from 'react'
import List from '../../productList.json'
import style from './Bag.module.css'
function Bag({props}) {

///-----size and number of item recover    
    let auxMemoryRecover=List.map(item=>localStorage.getItem(item.id.toString()))
    let memoryRecover=auxMemoryRecover.filter(item=>JSON.parse(item)!=null)
    let memory=memoryRecover.map(item=>JSON.parse(item))
    console.log(memory,'memory')
    let memoryActive=memory.filter(item=>item.id===props[0].id)
    console.log(memoryActive[0],'memoryActive')

// ////--------State variable    
    const [numberItems, setNumber ]= React.useState(memoryActive[0].numberItems)
    const [statusSize,changeStatusSize]=React.useState(memoryActive[0].size)
    const itemBag=List.filter(item=>item.id===props[0].id)
    console.log(itemBag[0],'itemBag')
    let itemName=itemBag[0].itemName
    let itemImage=itemBag[0].image
    let itemPrice=itemBag[0].Price

/////-------change color buttons selector

const colorDefault={color:'#264B66',BackColor:'#D8CFC3'}
const colorActive={color:'#D8CFC3',BackColor:'#264B66'}

    //-----change color buttons size

    const [sizeColorS,changeColorSizeS]=React.useState(colorDefault)
    const [sizeColorM,changeColorSizeM]=React.useState(colorDefault)
    const [sizeColorL,changeColorSizeL]=React.useState(colorDefault)
    const [sizeColorXL,changeColorSizeXL]=React.useState(colorDefault)

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

    useEffect(()=>{
        let idString= itemBag[0].id.toString()
        let subtotal=numberItems*itemPrice
        const info={numberItems:numberItems,size:statusSize,id:itemBag[0].id,Name:itemName,price:itemPrice,subtotal:subtotal}
        localStorage.setItem(idString,JSON.stringify(info))
        //console.log('siSirvo')
    },[statusSize],[numberItems])


        return (
         <div className={style.wrap}>
             <div className={style.wrapImg}>
                 <li className={style.imageClothing}><img src={itemImage} alt="img"/></li>
             </div>
             <div className={style.wrapBtn}>
                 <ul className={style.list}>
                     <li className={style.cardTextCursiv}>{itemName}</li>
                     <li className={style.cardText}>${itemPrice}</li>
                 </ul> 
                 <ul className={style.BtnsSizes}>
                     <li><button  className={style.BtnSize} style={{color:sizeColorS.color,backgroundColor:sizeColorS.BackColor}} onClick={()=>changeStatusSize('s')}>S</button></li>
                     <li><button  className={style.BtnSize} style={{color:sizeColorM.color,backgroundColor:sizeColorM.BackColor}} onClick={()=>changeStatusSize('m')}>M</button></li>
                    <li><button  className={style.BtnSize} style={{color:sizeColorL.color,backgroundColor:sizeColorL.BackColor}} onClick={()=>changeStatusSize('l')}>L</button></li>
                     <li><button  className={style.BtnSize}  style={{color:sizeColorXL.color,backgroundColor:sizeColorXL.BackColor}} onClick={()=>changeStatusSize('xl')}>XL</button></li>
                 </ul>
                  <ul className={style.BtnsAmount}>
                    <li><button  className={style.BtnPlus} onClick={()=> setNumber(numberItems===0?numberItems:numberItems-1)}>-</button></li>
                    <li className={style.Amount}>{numberItems}</li>
                     <li><button className={style.BtnPlus} onClick={()=> setNumber(numberItems+1)}>+</button></li>
                 </ul>
             </div>  
         </div>
    )
}

export default Bag
