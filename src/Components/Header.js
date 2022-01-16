import React from 'react'
import classes from "./Header.module.css"
import {Link} from "react-router-dom"
import Logo from "../images/logo.png"

const Header = () => {
    return (
        <header className={classes["header-container"]}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className={classes.nav}>
                    <Link to="/">
                        Home
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
