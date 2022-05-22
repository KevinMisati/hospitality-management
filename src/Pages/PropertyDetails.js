import React from 'react'
import classes from "./PropertyDetails.module.css"
import SimilarProperties from "../Components/PropertyDetails/SimilarProperties"
import GoogleMap from "../Components/PropertyDetails/GoogleMaps"
import {products} from "../data"
import {useParams} from "react-router-dom"
const Product = () => {
    const param = useParams()
    const id = param.id
    
    let product = products.filter(product => product.id == id)
    product = product[0]
  const {location} = product
    return (
        
        <div  className={classes["product-container"]}>
            <div  className={classes.product}>
                <div   className={classes["img-container"]} >
                    <img src={product.img} alt={product.title} />
                    
                </div>
                <div className={classes["product-info"]}>
                    <h2>{product.title}</h2>
                    <p className={classes.price}>${product.price}</p>
                    <p className={classes["description"]}>{product.info}
                    </p>
                </div>
            </div> 
            <div className={classes["similar-products"]}>
                <GoogleMap 
                    title="Location"
                    location={location}
                />
                <SimilarProperties
                    category={product.category} 
                    title={product.title}
                    headerTitle="Similar properties"
                 />

                 
            </div>
        </div>
    )
}

export default Product
