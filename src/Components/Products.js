import React from 'react'
import classes from "./Products.module.css"
import {products} from "../data"
import {Link} from "react-router-dom"
const Products = () => {
    return (
        <div className={classes["products-container"]}>
            <h1>Products</h1>
            <div className={classes.products}>
            {products.map(({id,title,img,price}) => (
                <Link  key={id} to={`/product/${id}`}>
                <div key={id} className={classes["product-container"]}>
                    <div className={classes.product}>
                        <div className={classes["img-container"]}>
                            <img src={img} alt={title} />
                        </div>
                        <p className={classes.title}>{title}</p>
                        <p className={classes.price}>${price}</p>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Products
