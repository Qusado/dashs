import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import $ from "jquery";



export const Theme = ({themes}) =>{
    $(function() {
        $("[name=toggler]").click(function(){
            $('.toHide').hide();
            $("#blk-"+$(this).val()).show();
        });
    });
    return(
        <div className="container h-100 lox">
            <h1 className="pt-2 pb-4 mb-0">Направление тематики дашборда</h1>
            <div className="row h-auto lox2">
                    <fieldset className="form-group theme_label col-6">
                        { themes && themes.map((themes, index) => {
                            return(
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="toggler" id={`rdb-${themes.id_constructor_theme}`}
                                           value={`${themes.id_constructor_theme}`}/>
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        {themes.title}
                                    </label>
                                </div>
                            );})}
                        <button type="button" className="btn btn-secondary btn-lg mt-3 ">Выбрать</button>
                    </fieldset>
                <div className="col-6">
                    { themes && themes.map((theme, index) => {
                        return(
                            <div id={`blk-${theme.id_constructor_theme}`} className="row toHide px-0 " style={{display:"none"}}>
                                <div className="col-md-12 mb-2">
                                    <Link >
                                        <div className="card">
                                            <img src={`/images/examples/${theme.examp}`}/>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        );})}
                </div>
            </div>
        </div>
    )
}
