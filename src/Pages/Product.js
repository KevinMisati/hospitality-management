import React from 'react'
import classes from "./Product.module.css"

const Product = () => {
    return (
        <div className={classes["product-container"]}>
           <div className={classes.product}>
                <h1>product</h1>
            </div> 
        </div>
    )
}

export default Product
