import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./kpi_modal.css"
import {KPi_card} from "./KPi_card";


export const KPI_modal = ({form, setForm, kpi_active, setKPI_active, current_card, setCurrent_card, current_kpi_panel, setCurrent_kpi_panel}) => {

    return(
        <div className={kpi_active? "modal_k active" : "modal_k"} onClick={()=> {
            setKPI_active(false);
        }}>
            <div className={kpi_active? "modal_k__content active" : "modal_k__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setKPI_active(false)}}>&times;</a>
                <KPi_card
                    form = {form}
                    setForm = {setForm}
                    kpi_active = {kpi_active}
                    setKPI_active = {setKPI_active}
                    current_card = {current_card}
                    setCurrent_card = {setCurrent_card}
                    current_kpi_panel={current_kpi_panel}
                    setCurrent_kpi_panel={setCurrent_kpi_panel}/>
            </div>

        </div>
    )
};
