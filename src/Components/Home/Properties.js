import React from 'react'
import classes from "./Properties.module.css"
import {products} from "../../data"
import {Link} from "react-router-dom"
const Products = () => {
    return (
        <div id="properties" className={classes["products-container"]}>
            <h1>Discover our properties</h1>
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
