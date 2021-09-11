import React from 'react'
import List from '../../productList.json'
import Bag from '../Bag/Bag'

function CardBag() {


  //console.log(List,'list')
  //---------Memory recover-------
   let auxMemoryRecover=List.map(item=>localStorage.getItem(item.id.toString()))
   let memoryRecover=auxMemoryRecover.filter(item=>JSON.parse(item)!=null)
   //---------Memory----
   let memory=memoryRecover.map(item=>JSON.parse(item))

   //console.log(auxMemoryRecover,'aux')
   //console.log(memoryRecover,'recover')
   //console.log(memory,'memory')
// filter en camino
   let result=memory.map(item=>List.filter(save=>save.id==item.id ))
  console.log(result,'result')
  

   

    return (
        <div>
            {result.map(item=><Bag props={item} key={item.id}/>)}
        </div>
    )
}

export default CardBag