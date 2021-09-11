import React from 'react'
import style from './Cards.module.css'
import List from '../../productList.json'
import Card from '../Card/Card'
function Cards(e,memoryStatus,ChangeMemory) {
    const ListFilter=e.props==="default" ? List: List.filter(item=>item.category_id==e.props)
    // console.log(ListFilter,'listFilter',e.props)
    return (
        <div className={style.wraper}>
        {ListFilter.map((item,index) => <Card props={item} key={index}/>)}
        </div>
    )
}

export default Cards
