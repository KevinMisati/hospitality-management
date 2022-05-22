import React, { useState } from "react"
import classes from "./googleMaps.module.css"

const GoogleMaps = ({title,info}) => {
    return(
        <div className={classes["map-container"]}>
            <h2>{title}</h2>
            <div className={classes.map}>
                <div className={classes["gmap_canvas"]}>
                    <iframe
                        width="100%" 
                        height="100%" 
                        id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=40200,%20Kisii&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" 
                        scrolling="no" 
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