import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";

export const Filter_01 = (filter_active, setFilter_active) => {

    return (
        <div className="row position-relative">
            <div className="col-12">
                <div className="d-flex z-filter">
                    <form className="first_form col-12">
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
                        <select className="form-select form-select-sm">
                            <option selected>Filter7</option>
                        </select>
                        <select className="form-select form-select-sm" size="4" aria-label="size 3 select example">
                            <option selected>Filter8</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>







                    </form>
                </div>
                <img className="img-fluid" src={baseUrl+`/frames/Frame 46.svg`}/>
            </div>
        </div>

    )}
