import React from 'react'
import classes from "./SimilarProducts.module.css"
import { products } from "../../data"
import { Link } from "react-router-dom"
const Products = ({headerTitle,category,title}) => {
    let similarProducts = products.filter(product => product.category === category)
    similarProducts = similarProducts.filter(product => product.title !== title)
    return (
        <div className={classes["products-container"]}>
            <h3>{headerTitle}</h3>
            <div className={classes.products}>
                {similarProducts.map(({ id, title, img, price }) => (
                    <Link key={id} to={`/product/${id}`}>
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
