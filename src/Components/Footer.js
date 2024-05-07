import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes["footer-container"]}>
          <div className={classes.footer}>
            <h2>Join us</h2>
                <p>We will let you know when we have new arrivals, events and promo's don't worry we send them infrequently, just a friendly hi now and again!</p>
            <form>
                    
                <input type="email" />
                <button type="submit">
                    <i className="far fa-envelope"></i>
                </button>
            </form>
            <div className={classes.contacts}>
                <a href="https://www.linkedin.com/in/kevin-misati-b5a399208/">
                    <i className="fab fa-linkedin"></i>
                </a>
                    <a href="https://twitter.com/misatikevi">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/KevinMisati">
                    <i className="fab fa-github"></i>
                </a>
                
            </div>
                <div className={classes.copyright}>© {new Date().getFullYear()} Livit hospitality</div>
          </div>  
        </div>
    )
}

export default Footer
