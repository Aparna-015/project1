import React from 'react'
import '../App.css'

function Productlist({product,addtocart}) {
  return (
    <div className='flex'>
{
product.map((productItems, productIndex) => {
    return(
        <div style={{width :'50%'}}>
            <div className= 'product'>
                <img src={productItems.url} width='40%'/>
                <p> {productItems.name}| {productItems.category}</p>
                <p>{productItems.seller} </p>
                <p> Rs.{productItems.price}</p>
                <button onClick={()=>{addtocart(productItems)}}
                    > Add to cart</button>
                </div>
        </div>
    )

})
}
    </div>
  )
}

export default Productlist