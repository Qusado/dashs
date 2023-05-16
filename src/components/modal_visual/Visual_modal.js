import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./visual_modal.css";
import {Dd_modal} from "../dd_modal";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/Auth.Context";
import {$host} from "../../http";


export const Visual_modal = ({form, current_graph, setForm, visual_active, setVisual_active, current_report}) => {

    const report_id = current_graph;
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [graphs, setGraphs] = useState();
    const [title, setTitle] = useState("");

    function GraphHandler() {
        switch (Number(report_id)) {
            case 1:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "Средний срок сделки";
                    document.getElementById('units1').value = "Дни";
                    document.getElementById('business1').value = "Разница в днях между датой создания сделки и датой закрытия сделки в статусе Успешно реализовано по квартирам в статусе продано";
                    document.getElementById('tech1').value = "Кол-во дней от dim_houses[dev_start] до dim_houses[dev_end] / последний день для выбраного месяца = DAY ( EOMONTH ( MIN ( 'Dim_Date'[Date] ); 0 ) )";
                }
                break;
            case 2:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "Количество проданных квартир";
                    document.getElementById('units1').value = "М2";
                    document.getElementById('business1').value = "Сколько м2 продали на дату анализа";
                    document.getElementById('tech1').value = "м2 площадь с коэф. = (fact_properties_custom_fields[area_balcony] + fact_properties_custom_fields[area_without_balcony] ) *  # коэффициент при старте'[коэффициент при старте]); фильтр по статусу Profitbase = dim_properties_statuses[base_status] = \"SOLD\"";
                }
                break;
            case 3:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "Усредненный темп продаж";
                    document.getElementById('units1').value = "М2";
                    document.getElementById('business1').value = "Сколько планируем продавать в среднем  в месяц";
                    document.getElementById('tech1').value = "м2 площадь с коэф. = ((fact_properties_custom_fields[area_balcony] + fact_properties_custom_fields[area_without_balcony] ) *  # коэффициент при старте'[коэффициент при старте]); фильтр по статусу Profitbase = dim_properties_statuses[base_status] = \"SOLD\") / Срок продаж мес = (dim_houses[sales_start] до dim_houses[dev_end] / последний день для выбраного месяца = DAY ( EOMONTH ( MIN ( 'Dim_Date'[Date] ); 0 ) ) )";
                }
                break;
            case 4:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "";
                    document.getElementById('units1').value = "";
                    document.getElementById('business1').value = "";
                    document.getElementById('tech1').value = "";
                }
                break;
            case 5:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "";
                    document.getElementById('units1').value = "";
                    document.getElementById('business1').value = "";
                    document.getElementById('tech1').value = "";
                }
                break;
            case 6:
                if(document.getElementById('title1') && document.getElementById('units1') && document.getElementById('business1') && document.getElementById('tech1')) {
                    document.getElementById('title1').value = "";
                    document.getElementById('units1').value = "";
                    document.getElementById('business1').value = "";
                    document.getElementById('tech1').value = "";
                }
                break;
            default:
                break;
        }

    }

    if(current_graph && report_id){
        GraphHandler();
    }
    // const getGraphs = useCallback(async ()=>{
    //     try{
    //         const fetched = await $host.get(`/api/chart/by_report_format/${report_id}`, {
    //             headers:{
    //                 authorization:"Bearer "+token,
    //             }
    //         }).then(res => {
    //             const g = res.data;
    //             setGraphs(g);
    //         })
    //     }
    //     catch (e){
    //
    //     }
    // }, [token, report_id, request])
    //
    // useEffect( () =>{
    //    getGraphs()
    // }, [getGraphs])

    return(
        <div className={visual_active? "modal_v active" : "modal_v"} onClick={()=> {
            setVisual_active(false);
        }}>

            <div className={visual_active? "modal_v__content active" : "modal_v__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setVisual_active(false)}}>&times;</a>
                {/*<Dd_modal form={form} setForm={setForm} graphs={graphs} visual_active={visual_active} setVisual_active={setVisual_active}/>*/}
                <h4>Добавите описание графика</h4>
                <div className="card m-4 rounded shadow-sm p-3" style={{backgroundColor: "#efefef", width:"40vw"}}>
                    <div className="row justify-content-md-between">
                        <div className="col-10">
                            <p><strong>График {report_id}</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="title1">Название графика в отчете</label>
                                <textarea className="form-control" id="title1" rows="1">{title}</textarea>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="units1">Единицы измерения</label>
                                <textarea className="form-control" id="units1" rows="1"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="business1">Бизнес-условие</label>
                        <textarea className="form-control" id="business1" rows="2"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tech1">Техническое условие</label>
                        <textarea className="form-control" id="tech1" rows="2"></textarea>
                    </div>



                </div>
                <div className="row col-12 justify-content-end mt-4 px-2">
                    <input type="button" className="save_btn shadow-sm" value="Сохранить"/>
                </div>
            </div>

        </div>
    )
};
