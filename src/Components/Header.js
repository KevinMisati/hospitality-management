import React from 'react'
import classes from "./Header.module.css"


const Header = () => {
    return (
        <header className={classes["header-container"]}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <h2>Fonstore</h2>
                </div>
                <div className={classes.cart}>
                    <i className="fas fa-cart-plus"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
