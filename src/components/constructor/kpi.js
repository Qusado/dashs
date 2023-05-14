import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {ViewKpiTitle} from "../Component_title/ViewKpiTitle";
import {ViewLayoutKpi} from "../Component_layout/ViewLayoutKpi";
import {ViewKPIDiscript} from "../Component_description/ViewKPIDiscript";
import {ViewExampleKPI} from "../Component_example/ViewExampleKPI";
import {$host} from "../../http";
import {baseUrl} from "../baseRoute";
import {KPI_modal} from "../modal_kpi/KPI_modal";



export const KPI = ({form ,setForm, current_kpi_panel, setCurrent_kpi_panel}) =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [kpis, setKpis] = useState()
    const [choise, setChoise] = useState(false);

    const getKpis = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/kpi`, {
                headers:{
                    authorization:"Bearer "+token
                }
            }).then(res => {
                const k = res.data;
                setKpis(k);
            });
        } catch (e){}
    }, [token, request ])

    const [current_kpi, setCurrentKpi] = useState({
        kpi_id: '', title:''
    }) ;
    const [modalViewExpActive, setModalViewExpActive] = useState(false);


    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');
    })


    const KPIhandler = event =>{
        setCurrentKpi({kpi_id: event.target.id, title: event.target.getAttribute("data-title")})
        setForm({...form, kpi_id: Number(event.target.id)});
        setChoise(true);
    }

    useEffect(()=>{
        getKpis()
    }, [getKpis])

    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0 justify-content-center">
                <div className="col-10 px-0 left_part">
                    <div className="row col-12 m-0 p-0 justify-content-start">
                        <div className="col-12 px-0 mb-2">
                            <div className="background_title">
                                <ViewKpiTitle current_kpi={current_kpi}/>
                            </div>
                        </div>
                        <div className="col-8" style={{paddingLeft: "30px", paddingRight: "0px"}}>
                            <div className="row">
                                <div id="view_board" className="view_board mb-2 px-0 col-12">
                                    <div className="box">
                                        <div id="m-6" className="Hide">
                                            <ViewLayoutKpi form={form}
                                                           setForm={setForm}
                                                           current_kpi={current_kpi}
                                                           current_kpi_panel={current_kpi_panel}
                                                           setCurrent_kpi_panel={setCurrent_kpi_panel}/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pb-2" style={{paddingRight: "30px", paddingLeft: "0px"}}>
                            <h5 className="examples_title">Описание</h5>
                            <ViewKPIDiscript current_kpi={current_kpi}/>
                        </div>
                        <div className="col-12" style={{paddingLeft: "30px"}}>
                            <h5 className="examples_title">Примеры</h5>
                        </div>
                        <div className="col-8">
                            <ViewExampleKPI current_kpi={current_kpi}
                                            exp_active={modalViewExpActive}
                                            setExp_active={setModalViewExpActive}/>
                        </div>
                    </div>
                </div>
                <div className="col-2 right_part m-0" style={{padding: '0px'}}>
                    <div className="h-100 position-relative">
                        <div className="praon29">
                            {kpis && kpis.map((kpi, index) => {
                                return (
                                    <>
                                        <input type="radio" name="kpi_id" className="kpi_id"
                                               id={`${kpi.id_constructor_kpi}`}
                                               value={`${kpi.id_constructor_kpi}`}/>
                                        <label htmlFor={`${kpi.id_constructor_kpi}`}>
                                            <div className="praon30 px-4 py-5 "
                                                 name="kpi_id"
                                                 id={`${kpi.id_constructor_kpi}`}
                                                 data-title={`${kpi.title}`}
                                                 onClick={KPIhandler}
                                            >
                                                <img src={baseUrl+`/mini/${kpi.layout_img}`}
                                                     name="kpi_id"
                                                     className="shadow-5-strong"
                                                     id={`${kpi.id_constructor_kpi}`}
                                                     data-title={`${kpi.title}`}
                                                     value={`${kpi.id_constructor_kpi}`}
                                                />
                                            </div>
                                        </label>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_place">
                <div className="row col-12 justify-content-end py-2">
                    <input type="button" name="previous" className="previous action-button shadow" value="Вернуться"/>
                    {choise === true ? <input type="button" name="next" className="next action-button shadow" value="К следующему шагу"/> :
                        <input type="button" name="next" id="next" className="next action-button shadow disabled" value="К следующему шагу" disabled/>}
                </div>
            </div>
        </fieldset>

    )
}
