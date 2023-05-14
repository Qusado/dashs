import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./visual_modal.css";
import {Dd_modal} from "../dd_modal";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/Auth.Context";
import {$host} from "../../http";


export const Visual_modal = ({form, setForm, visual_active, setVisual_active, current_report}) => {

    const report_id = current_report.report_id;
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [graphs, setGraphs] = useState();

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
                            <p><strong>График 1 </strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Название графика в отчете</label>
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
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Техническое условие</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>



                </div>
                <div className="row col-12 justify-content-end mt-4 px-2">
                    <input type="button" className="save_btn shadow-sm" value="Сохранить"/>
                </div>
            </div>

        </div>
    )
};
