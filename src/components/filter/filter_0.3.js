import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";

export const Filter_03 = () => {
    function openFil() {
        if(document.getElementById("SideFil") )
        {
            document.getElementById("SideFil").style.width = "30%";
        }
    }
    function closeFil() {
        if(document.getElementById("SideFil") )
        {
            document.getElementById("SideFil").style.width = "0%";
        }

    }
    return (
        <div className="row m-3 position-relative container">
            <div className="col-1 d-flex justify-content-left p-0">
                <div id="SideFil" className="row SideFil">

                    <form className="second_form col-11">
                        <select className="form-select form-select-sm">
                            <option selected>Filter1</option>
                        </select>
                        <select className="form-select form-select-sm">
                            <option selected>Filter2</option>
                        </select>
                        <select className="form-select form-select-sm">
                            <option selected>Filter3</option>
                        </select>
                        <select className="form-select form-select-sm">
                            <option selected>Filter4</option>
                        </select>
                        <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">
                            <option selected>Filter5</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">
                            <option selected>Filter6</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </form>
                    <a href="javascript:void(0)" className="col-1 px-0 closebtnf" onClick={closeFil}>
                        <div className="logoLine" style={{width:"0.5em", height:"3em"}}>
                        </div>
                    </a>
                </div>
                <div className="d-flex flex-column bd-highlight nav3">

                    <div className="nav-item hovervariant py-2">
                        <a href="#"
                           className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"
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


                    <div className="nav-item hovervariant py-2">
                        <a href="#" onClick={openFil}
                           className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"
                           aria-expanded="false">
                            <div className="logo6" style={{width:"2.5em", height:"2.5em"}}></div>
                        </a>
                    </div>
                </div>

            </div>
            <div className="col-11 pl-0" style={{padding:"0px"}}>
                <img className="img-fluid" src={baseUrl+`/frames/Frame 48.svg`}/>
            </div>

        </div>


    )
}
