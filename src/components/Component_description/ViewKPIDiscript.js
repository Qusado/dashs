import React, {useCallback, useContext, useEffect, useState} from 'react'

import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {$host} from "../../http";

export const ViewKPIDiscript =({current_kpi})=> {

    const by_kpi_id = current_kpi.kpi_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [kpi, setKpi] = useState()

    const getKpi = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/kpi/${by_kpi_id}`, null, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const k = res.data;
                setKpi(k);
            });
        } catch (e){

        }
    }, [token, by_kpi_id, request ])
    useEffect( () =>{
        getKpi()
    }, [getKpi])


        return(
            <>
                {!loading && kpi &&
                <div className="col-12 description_part">
                    <p className="lead">{kpi.description}</p>
                </div>
                }
            </>


        )

}
