import React from 'react'
import {Link} from "react-router-dom";
import {Logout} from "./logout";


export const Main_Nav = () => {
    return (
    <div className="justify-content-between">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mnav">
            <Link className="navbar-brand mx-4" to="/">DASH-SHOP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/constructor">Собрать свой</Link>
                </div>
            </div>
            <Logout/>
        </nav>

    </div>
    )
}
