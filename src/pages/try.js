
export const Try = () =>{
    function openFloatFil() {
        if(document.getElementById("FloatFilter") )
        {
            document.getElementById("FloatFilter").style.width = "100%";
        }
    }
    function closeFloatFil() {
        if(document.getElementById("FloatFilter") )
        {
            document.getElementById("FloatFilter").style.width = "0";
        }

    }
    return(
        <div className="container" style={{height: '50%'}}>
            <div className="row position-relative"  style={{height: '600px'}}>
                {/*<div className="col-2 position-relative">*/}
                {/*    <div className="bd-highlight nav2">*/}
                {/*        <div id="menu">*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#"*/}
                {/*                   className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo1" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor">Page1</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#"*/}
                {/*                   className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo2" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor text-decoration-none">Page2</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#"*/}
                {/*                   className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo3" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor text-decoration-none">Page3</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#"*/}
                {/*                   className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo4" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor text-decoration-none">Page4</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#"*/}
                {/*                   className="d-flex align-items center justify-content-center px-2  link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo5" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor text-decoration-none">Page5</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div id="fil">*/}
                {/*            <div className="nav-item hovervariant py-2">*/}
                {/*                <a href="#" onClick={openHoverFil}*/}
                {/*                   className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"*/}
                {/*                   aria-expanded="false">*/}
                {/*                    <div className="logo6" style={{width: "2.5em", height: "2.5em"}}></div>*/}
                {/*                    <a href="#" className="nav-link textchengecolor text-decoration-none">Filter</a>*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div id="hoverFilter" className="row hoverFilter">*/}
                {/*        <form className="second_form col-11">*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter1</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter2</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter3</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter4</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">*/}
                {/*                <option selected>Filter5</option>*/}
                {/*                <option value="1">One</option>*/}
                {/*                <option value="2">Two</option>*/}
                {/*                <option value="3">Three</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter6</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">*/}
                {/*                <option selected>Filter7</option>*/}
                {/*                <option value="1">One</option>*/}
                {/*                <option value="2">Two</option>*/}
                {/*                <option value="3">Three</option>*/}
                {/*            </select>*/}
                {/*            <select className="form-select form-select-sm">*/}
                {/*                <option selected>Filter8</option>*/}
                {/*            </select>*/}
                {/*        </form>*/}
                {/*        <a href="javascript:void(0)" className="col-1 px-0 closeHoverFil" onClick={closeHoverFil}*/}
                {/*           style={{width: "0.5em", height: "3em"}}>*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div id="FloatFilter" className="row FloatFilter">
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
                        <select className="form-select form-select-sm">
                            <option selected>Filter6</option>
                        </select>
                        <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">
                            <option selected>Filter7</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select form-select-sm">
                            <option selected>Filter8</option>
                        </select>
                    </form>
                    <a href="javascript:void(0)" className="col-1 px-0 closebtnf" id="closefloatFil"/>
                </div>
                <div id="Float_fil_button" id="openfloatFil">
                        <img className="m-1 shadow-0" src="images/icons/Configure_w.svg"/>
                </div>
            </div>
        </div>
)
}
