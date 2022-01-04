import React from 'react'
import classes from "./Products.module.css"
import {products} from "../data"
const Products = () => {
    return (
        <div className={classes["products-container"]}>
            <h1>Products</h1>
            <div className={classes.products}>
            {products.map(({id,title,img,price}) => (
                <div key={id} className={classes["product-container"]}>
                    <div className={classes.product}>
                        <div className={classes["img-container"]}>
                            <img src={img} alt={title} />
                        </div>
                        <p>{title}</p>
                        <p>{price}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Products
