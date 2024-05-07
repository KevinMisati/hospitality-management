import React from 'react'
import classes from "./Banner.module.css"
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div >
                <video className={classes["background-video"]} autoPlay loop muted >
                    {/* <source src="https://videos.pexels.com/video-files/6474635/6474635-uhd_4096_2160_25fps.mp4" type="video/mp4" /> */}
                    <source src="https://videos.pexels.com/video-files/6466343/6466343-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                </video>
                <div>
                    <div className={classes.banner}>
                    <h1>Kenya's Most Creative Hospitality Company</h1>
                    <p>We manage luxury villas, hotels, guest houses, resorts, and vacation homes in Kenya.</p>
                    <div className={classes.link}>
                        <a href="#properties" >Explore</a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner
