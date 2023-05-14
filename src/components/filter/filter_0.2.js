import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";




export const Filter_02 = () => {

    return (
        <div className="row position-relative">
            <div className="col-12">
                <div className="z-filter2">
                    <form className="row mx-1 mt-1" role="form">
                        <div className="col-3">
                            <select className="form-select form-select-sm">
                                <option selected>Filter1</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select form-select-sm">
                                <option selected>Filter2</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select form-select-sm">
                                <option selected>Filter3</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select form-select-sm">
                                <option selected>Filter4</option>
                            </select>
                        </div>


                    </form>

                </div>
                <img className="img-fluid" src={baseUrl+`/frames/Frame 47.svg`}/>
            </div>
        </div>

    )}
