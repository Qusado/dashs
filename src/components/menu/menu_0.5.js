import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";





export const Menu_05 = () => {
    function openNav() {
        if(document.getElementById("mySidenav2") && document.getElementById("mask")  )
        {
            document.getElementById("mySidenav2").style.height = "70%";
        }
    }
    function closeNav() {
        if(document.getElementById("mySidenav2") )
        {
            document.getElementById("mySidenav2").style.height = "0";
        }

    }
    return (
        <div className="side">

            <div id="mySidenav2" className="sidenav2 shadow">
                <a href="javascript:void(0)" className="d-flex justify-content-center closebtn2" onClick={closeNav}>&times;</a>
                <div className=" d-flex flex-column bd-highlight">
                    <div className="nav-item hovervariant py-0">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo1" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                    <div className="nav-item hovervariant py-0">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo2" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                    <div className="nav-item hovervariant py-0">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo3" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                    <div className="nav-item hovervariant py-0">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo4" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                    <div className="nav-item hovervariant py-0">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo5" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                </div>
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
