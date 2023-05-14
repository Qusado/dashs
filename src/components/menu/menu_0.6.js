import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";



export const Menu_06 = () => {
    return (
        <div className="row">
            <div id="exTab3" className="container">
                <ul className="nav nav-pills mx-0">
                    <li className="active">
                        <a href="#1b" className="active" data-toggle="tab">Dashboard page 1</a>
                    </li>
                    <li>
                        <a href="#2b" data-toggle="tab">Dashboard page 2</a>
                    </li>
                    <li>
                        <a href="#3b" data-toggle="tab">Dashboard page 3</a>
                    </li>
                </ul>
                <div className=" col-12 screen">
                    <img className="img-fluid"  src={baseUrl+"/frames/Frame 41.svg"}/>
                </div>
            </div>
        </div>
    )
}
