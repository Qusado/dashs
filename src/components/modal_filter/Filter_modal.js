import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./filter_modal.css"
import {Filter_card} from "./filter_card";


export const Filter_modal = ({filter, setFilter, filter_active, setFilter_active}) => {
    var num;
    const pluseHandler = event => {
        num = filter.length+1;
        setFilter([...filter, <Filter_card num={num}/>]);
    }
    return(
        <div className={filter_active? "modal_f active" : "modal_f"} onClick={()=> {
            setFilter_active(false);
        }}>
            <div className={filter_active? "modal_f__content active" : "modal_f__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setFilter_active(false)}}>&times;</a>
                <h3>Опишите фильтры, которые вы хотите видеть на дашборде</h3>
                <div className="row p-3 o" style={{height: "70vh", width:"70vw", overflowY: "scroll"}}>
                    <div className="col-9">
                        {filter}
                    </div>
                    <div className="col-3">
                        <button type="button" className="green_btn m-1" onClick={pluseHandler}>
                           Добавить фильтр
                        </button>
                    </div>


                </div>
            </div>

        </div>
    )
};
