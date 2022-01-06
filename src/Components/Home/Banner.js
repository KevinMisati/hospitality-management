import React from 'react'
import classes from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
                <h1>Sale Up to 30% while stock lasts</h1>
            </div>
        </div>
    )
}

export default Banner
