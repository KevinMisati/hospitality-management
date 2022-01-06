import React from 'react'
import classes from "./Home.module.css"
import Banner from "../Components/Home/Banner"
import Products from "../Components/Home/Products"

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
