import React, { useState } from "react"
import classes from "./googleMaps.module.css"

const GoogleMaps = ({ title, info,location }) => {
const {city} = location
    return (
        <div className={classes["map-container"]}>
                <h2>{title}</h2>
                <div className={classes.map}>
                    <div className={classes["gmap_canvas"]}>
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src={`https://maps.google.com/maps?q=40200,%20${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            frameborder="0"
                            scrolling="yes"
                            marginheight="0"
                            marginwidth="0"
                            title="Google map"
                        >
                        </iframe>
                        <br />
                    </div>
                </div>
            </div>
    )
}

export default GoogleMaps

/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embed google my maps</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */