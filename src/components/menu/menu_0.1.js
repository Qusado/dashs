import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";



export const Menu_01 = () => {
    return (
            <div className="row">
                <div className="d-flex justify-content-left col-1 p-0">
                    <div className="d-flex flex-column bd-highlight nav1">
                        <div className="nav-item hovervariant py-2">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                               aria-expanded="false">
                                <div className="logo1" style={{width:"2.5em", height:"2.5em"}}></div>
                            </a>
                        </div>
                        <div className="nav-item hovervariant py-2">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"
                               aria-expanded="false">
                                <div className="logo2" style={{width:"2.5em", height:"2.5em"}}></div>
                            </a>
                        </div>
                        <div className="nav-item hovervariant py-2">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                               aria-expanded="false">
                                <div className="logo3" style={{width:"2.5em", height:"2.5em"}}></div>
                            </a>
                        </div>
                        <div className="nav-item hovervariant py-2">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                               aria-expanded="false">
                                <div className="logo4" style={{width:"2.5em", height:"2.5em"}}></div>
                            </a>
                        </div>
                        <div className="nav-item hovervariant py-2">
                            <a href="#"
                               className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                               aria-expanded="false">
                                <div className="logo5" style={{width:"2.5em", height:"2.5em"}}></div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col-11 pl-0">
                    <img className="img-fluid" src={baseUrl+"/frames/Frame.svg"}/>
                </div>

            </div>


    )
}
