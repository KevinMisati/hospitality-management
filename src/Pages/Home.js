import React from 'react'
import classes from "./Home.module.css"
import Banner from "../Components/Banner"
import Products from "../Components/Products"

const Home = () => {
    return (
        <div className={classes["home-container"]}>
            <div className={classes.home}>
                <Banner />
                <Products />
            </div>
        </div>
    )
}

export default Home
