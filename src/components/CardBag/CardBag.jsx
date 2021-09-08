import React from 'react'
import List from '../../productList.json'

function CardBag(e) {
    console.log(e)
    const product = List.filter( item => item.id === e.props)

    console.log(product)

    return (
        <div>
            
        </div>
    )
}

export default CardBag
