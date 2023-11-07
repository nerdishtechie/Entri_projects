import React from 'react'

function Cart(props) {
    console.log(props)
    var total=0;
    props.data.map((product)=>{
        return (
            total=total+product.data.Price )
    }
    
    
    )
    return (
        <div class="row">
            {props.data.map((cartItem) => {
                return(
                <div className="col-sm-3">
                    <div class="card" style={{ width: "18rem", margin: "4%" }}>
                        <img src={cartItem.data.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{cartItem.data.Name}</h5>
                            <p class="card-text">{cartItem.data.Description}</p>
                            <p class="card-text">{cartItem.data.Price}</p>
                        </div>
                    </div>
                </div>

             )})  }
             <b>Total cost of your products: Rs. {total}</b>
             
             </div>
    )
}



export default Cart