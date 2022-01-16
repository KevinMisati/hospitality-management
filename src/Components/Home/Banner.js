import React from 'react'
import classes from "./Banner.module.css"
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
                <div>
                    <h1>Kenya's Most Creative Hospitality Company</h1>
                    <p>We manage luxury villas, hotels, guest houses, resorts, and vacation homes in Kenya.</p>
                    <div className={classes.link}>
                        <Link to="/" >Explore</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner
