import React from 'react'
import classes from "./Header.module.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className={classes["header-container"]}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Link to="/">
                        <h2>
                            Fonstore
                        </h2> 
                    </Link>
                </div>
                <div className={classes.cart}>
                    <i className="fas fa-cart-plus"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
