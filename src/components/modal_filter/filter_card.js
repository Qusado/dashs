import React, {useContext, useState} from 'react'
import "./filter_modal.css"
import {baseUrl} from "../baseRoute";
import $ from "jquery";

export const Filter_card = ({num }) => {

    var Number_card = 0;

    return(
            <div className="card m-4 rounded shadow-sm p-3" style={{backgroundColor: "#efefef"}}>
                <div className="row justify-content-md-between">
                    <div className="col-10">
                        <p><strong>Фильтр {num}</strong></p>
                    </div>
                    <div className="col-2">
                        <button  className="btn btn-outline-danger btn-sm">удалить</button>
                    </div>


                </div>
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Тип фильтра</label>
                            <select className="form-control" id="exampleFormControlSelect2">
                                <option>Радио кнопка</option>
                                <option>Чекбокс</option>
                                <option>Выпадающий список</option>
                                <option>Ползунок</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Название фильтра в отчете</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Единицы измерения</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Бизнес-условие</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>


            </div>
    )
}
