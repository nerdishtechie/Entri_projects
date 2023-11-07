import React from 'react'


function Card(props) {
  return (
    <div className="row" style= {{margin:"2%"}}>
        {props.data.map((product)=>{
        return(
            <div className="col-sm-3">
        <div class="card" style={{width: "18rem", margin:"4%"}}>
    <img src={product.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.Name}</h5>
      <p class="card-text">{product.Description}</p>
      <p class="card-title">{product.Price}</p>
      <button class="btn btn-primary"onClick={()=>props.handleCartData(product)}>Add to Cart </button>
    </div>
  </div>
  </div>)
        })}</div>
  )
}

export default Card