import React, { useEffect, useState }from 'react'
import List from '../../productList.json'
import Bag from '../Bag/Bag'
import style from './CardBag.module.css'

function CardBag() {

 
  //console.log(List,'list')
  //---------Memory recover-------
   let auxMemoryRecover=List.map(item=>localStorage.getItem(item.id.toString()))
   let memoryRecover=auxMemoryRecover.filter(item=>JSON.parse(item)!=null)
   //---------Memory----
   let memory=memoryRecover.map(item=>JSON.parse(item))

   //console.log(auxMemoryRecover,'aux')
   //console.log(memoryRecover,'recover')
   console.log(memory,'memory')
// filter en camino
   let result=memory.map(item=>List.filter(save=>save.id===item.id ))

  console.log(result,'result')
//-----everything abaut WhatsApp
    let subtotal=memory.map(item=>item.subtotal)
    console.log(subtotal,'subt')
    let total=subtotal===0? 0: subtotal.reduce(function(a,b){return a+b})
    let whatsAppMessege=JSON.stringify(memory)+'Su total es:'+total.toString()
    console.log(total,'total')
 

  function WsMessege(){
    console.log('WsMessege')
    localStorage.clear()
}
   
    return (
        <div className={style.wrap}>
            {result.map(item=><Bag props={item} key={item.id}/>)}
            <button className={style.BtnsAmount} onClick={()=> WsMessege()}><a href={`https://wa.me/573115681660?text=${whatsAppMessege}`}>Pedir ahora</a></button>

        </div>
    )
}

export default CardBag
