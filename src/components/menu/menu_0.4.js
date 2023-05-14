import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";





export const Menu_04 = () => {
    function openNav() {
        if(document.getElementById("mySidenav") && document.getElementById("mask")  )
        {
            document.getElementById("mySidenav").style.width = "23%";
        }
    }
    function closeNav() {
        if(document.getElementById("mySidenav") )
        {
            document.getElementById("mySidenav").style.width = "0";
        }

    }
    return (
        <div className="side">

            <div id="mySidenav" className="sidenav shadow">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <ul className="nav nav-pills flex-column mb-auto for_ham">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Dashboard page 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">

                            Dashboard page 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">

                            Dashboard page 3
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">

                            Dashboard page 4
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">

                            Dashboard page 5
                        </a>
                    </li>

                </ul>
            </div>


            <div className="col-12 pl-0">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav} className="d-flex align-items-start bi bi-list hamburger"
                                              viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <div id="mask">
                    <img className="img-fluid"  src={baseUrl+"/frames/Frame 42.svg"}/>
                </div>

            </div>

        </div>


    )}
