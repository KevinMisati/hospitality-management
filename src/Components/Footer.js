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
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
            </div>
                <div className={classes.copyright}>© 2022 Fonestore marketplace</div>
          </div>  
        </div>
    )
}

export default Footer
