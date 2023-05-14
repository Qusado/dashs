import React, {useContext, useState} from 'react'
import "./kpi_modal.css"
import {baseUrl} from "../baseRoute";
import $ from "jquery";

export const KPi_card = ({ form, setForm, kpi_active, setKPI_active, current_card, setCurrent_card, current_kpi_panel, setCurrent_kpi_panel}) => {

    var Number_card = 0;

    const CardHandler = () =>{
        Number_card = Number(current_card)+1;
        // document.getElementById('title').value = current_kpi_panel[current_card].title;
        // document.getElementById('fact').value = current_kpi_panel[current_card].fact;
        // document.getElementById('plan').value = current_kpi_panel[current_card].plan;
        // document.getElementById('graph').value = current_kpi_panel[current_card].graph;
        // if(current_kpi_panel[current_card].per_dev === true){
        //     document.getElementById('per_dev').checked = true;
        // }else {
        //     document.getElementById('per_dev').checked = false;
        // }
        // if(current_kpi_panel[current_card].num_dev === true){
        //     document.getElementById('num_dev').checked = true;
        // }else{
        //     document.getElementById('num_dev').checked = false;
        // }
        document.getElementById('about_card').textContent = "Показатель "+Number_card;
    }

    function clearAfterSave(){
        document.getElementsByName("input_group").forEach(element =>
        {
            element.value = '';
            element.checked = 'false';
        })

    }
    const SaveHandler = event => {
        // current_kpi_panel[current_card].title = document.getElementById('title').value;
        // current_kpi_panel[current_card].fact = document.getElementById('fact').value;
        // current_kpi_panel[current_card].plan = document.getElementById('plan').value;
        // if(document.getElementById('per_dev').checked === true)
        // {
        //   current_kpi_panel[current_card].per_dev = true;
        // }
        // else {
        //   current_kpi_panel[current_card].per_dev = false;
        // }
        // if(document.getElementById('num_dev').checked === true)
        // {
        //     current_kpi_panel[current_card].num_dev = true;
        // }
        // else{
        //     current_kpi_panel[current_card].num_dev = false;
        // }
        // current_kpi_panel[current_card].graph = document.getElementById('graph').value;
        // current_kpi_panel[current_card].id = true;
        // clearAfterSave();
        setKPI_active(false);
    }

    if(current_kpi_panel && current_card){
        CardHandler();
    }

    return(
        <div className="row mx-3 my-2 px-4">
            <h3 className="mb-2 ">Заполните поля {current_card && Number_card} показателя</h3>
            <div className="col-12 position-relative">
                    <form className="row justify-content-end h-100">
                        <div className="container big_card shadow-lg pt-1 p-5 my-4">
                            <p className="fst-italic mb-3  text-white" id="about_card"/>
                            <div className="row justify-content-center mb-4">
                                <div className="col-9">
                                    <input type="text"
                                           id="title"
                                           name="input_group"
                                           data-cardi-id=""
                                           className="form-control form-control" placeholder="Название показателя в отчете"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="form-group text-white">
                                        <label htmlFor="exampleFormControlTextarea1">Бизнес-условие</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-12">
                                    <div className="form-group text-white">
                                        <label htmlFor="exampleFormControlTextarea1">Техническое условие</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-1">
                                <div className="form text-center text-white">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="per_dev" />
                                        <label className="form-check-label text-white" htmlFor="per_dev">Процентное отклонение</label>
                                    </div>/
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"  type="checkbox" id="num_dev"/>
                                        <label className="form-check-label text-white" htmlFor="num_dev">Цифровое отклонение</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>

            <div className="row col-12 justify-content-end mt-4 mx-0 px-0">
                <input type="button" className="save_btn shadow-sm" onClick={SaveHandler} value="Сохранить"/>
            </div>

        </div>
    )
}
