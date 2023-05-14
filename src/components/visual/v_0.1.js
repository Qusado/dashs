import React, {useContext} from 'react'
import $ from "jquery";
import {baseUrl} from "../baseRoute";

export const Visual_01 = () => {
    var v1 = baseUrl+'/frames/Frame 50.svg';
    var v2 = baseUrl+'/frames/Frame 51.svg';
    $(document).ready(function (){
        $('#charts').click(function (){
            document.getElementById("img_var").src=v1;
        });
        $('#tables').click(function (){
            document.getElementById("img_var").src=v2;
        });
    })
    return (
        <div className="position-relative">
            <div className="box_v1">
                <div className="row justify-content-end">
                    <div className="col-4 pt-2 check_button">
                        <input type="radio"
                               className="" name="check_button" id="charts"
                        checked/>
                        <label className="shadow-3" id="lox" htmlFor="charts">Таблицы</label>
                        <input type="radio"
                               className="" name="check_button" id="tables"/>
                        <label className="shadow-3" id="lox0" htmlFor="tables">Графики</label>
                    </div>
                </div>
            </div>


            <div>
                <img className="img-fluid" id="img_var"  src={v1}/>
            </div>
        </div>


    )
}
