import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Kpi_01} from "../kpi/kpi_0.1";
import {Kpi_02} from "../kpi/kpi_0.2";
import {Kpi_03} from "../kpi/kpi_0.3";

export const ViewLayoutKpi =({form, setForm, current_kpi, current_kpi_panel, setCurrent_kpi_panel})=> {
    const kpi_id = current_kpi.kpi_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [modalViewKPiActive, setModalViewKPIActive] = useState(false);
    return(
        <div>
            {kpi_id==4 && <Kpi_01 form={form}
                                  setForm={setForm}
                                  kpi_active={modalViewKPiActive}
                                  setKPI_active={setModalViewKPIActive}
                                  current_kpi_panel={current_kpi_panel}
                                  setCurrent_kpi_panel={setCurrent_kpi_panel}/>}
            {kpi_id==5 && <Kpi_02 form={form}
                                  setForm={setForm}
                                  kpi_active={modalViewKPiActive}
                                  setKPI_active={setModalViewKPIActive}
                                  current_kpi_panel={current_kpi_panel}
                                  setCurrent_kpi_panel={setCurrent_kpi_panel}/>}
            {kpi_id==6 && <Kpi_03 form={form}
                                  setForm={setForm}
                                  kpi_active={modalViewKPiActive}
                                  setKPI_active={setModalViewKPIActive}
                                  current_kpi_panel={current_kpi_panel}
                                  setCurrent_kpi_panel={setCurrent_kpi_panel}/>}

        </div>
    );
}
