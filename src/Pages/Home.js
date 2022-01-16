import React from 'react'
import classes from "./Home.module.css"
import Banner from "../Components/Home/Banner"
import Properties from "../Components/Home/Properties"

const Home = () => {
    return (
        <div className={classes["home-container"]}>
            <div className={classes.home}>
                <Banner />
                <Properties />
            </div>
        </div>
    )
}

export default Home
