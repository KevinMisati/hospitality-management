import React from 'react'
import classes from "./Banner.module.css"
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div >
                <video className={classes["background-video"]} autoPlay loop muted /* poster="https://assets.codepen.io/6093409/river.jpg" */>
                    {/* <source src="https://vod-progressive.akamaized.net/exp=1644260343~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1707%2F18%2F458535442%2F2025651690.mp4~hmac=14563194f877e33a2160e8493c6765fd68d9fb52da6aeae80547b16eb7473db3/vimeo-prod-skyfire-std-us/01/1707/18/458535442/2025651690.mp4?filename=pexels-cottonbro-5371876.mp4" type="video/mp4" /> */}
                    <source src="https://player.vimeo.com/external/499160258.sd.mp4?s=aeb0acd76c796fdc74198d4346938072e2f72f3a&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
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
