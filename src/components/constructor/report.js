import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {ViewExampleReport} from "../Component_example/ViewExampleReport";
import {Visual_modal} from "../modal_visual/Visual_modal";
import {$host} from "../../http";
import {baseUrl} from "../baseRoute";



export const Report = ({form, setForm}) =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [reports, setReports] = useState()
    const [choise, setChoise] = useState(false);
    const [boards, setBoards] = useState([
        {id:1, items:'', title:""},
        {id:2, items:'', title:""},
        {id:3, items:'', title:""},
        {id:4, items:'', title:""},
        {id:5, items:'', title:""},
        {id:6, items:'', title:""}
    ]);

    const getReports = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/report`,  {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const r = res.data;
                setReports(r);
            });
        } catch (e){

        }
    }, [token, request ]);

    const [current_report, setCurrentReport] = useState({
        report_id:'', title:''
    });
    const [modalViewExpActive, setModalViewExpActive] = useState(false);
    const [modalViewVisualActive, setModalViewVisualActive] = useState(false);
    const [graphsP, setGraphsP] = useState();
    const [graphsS, setGraphsS] = useState();

    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');
    })

    const Reporthandler = event => {
        setCurrentReport({report_id: event.target.id, title: event.target.getAttribute("data-title")})
        setForm({...form, report_id: Number(event.target.id)});
        setChoise(true);
    }

    $(function(){
        var $h3s = $('.list-group-item').click(function(){
            $h3s.removeClass('active');
            $(this).addClass('active');
        });
    });



    const getGraphsPlan = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/chart/by_report_format/5`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const g = res.data;
                setGraphsP(g);
            })
        }
        catch (e){

        }
    }, [token, request])

    const getGraphsStrat = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/chart/by_report_format/2`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const g = res.data;
                setGraphsS(g);
            })
        }
        catch (e){

        }
    }, [token, request])


    useEffect(()=>{
        getReports()
        getGraphsPlan()
        getGraphsStrat()
    }, [getReports, getGraphsStrat, getGraphsPlan])

    function dragStart(event) {
        event.dataTransfer.setData("id", event.target.id);
        event.dataTransfer.setData("images", event.target.getAttribute("data-images"));
    }
    function dragEnter(event) {
        event.preventDefault();
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.add("droppable-hover");
        }
    }
    function dragOver(event) {
        event.preventDefault();
        if(!event.target.classList.contains("dropped")) {
            event.preventDefault();
        }
    }
    function dragLeave(event) {
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.remove("droppable-hover");
        }
    }

    function drop(event) {
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.remove("droppable-hover");
            const draggableElementId = event.dataTransfer.getData("id");
            const draggableElementData = event.dataTransfer.getData("images")
            event.target.insertAdjacentHTML("afterbegin",
                `<img class="insertGraph dropped" 
                        draggable="false"
                        src="${draggableElementData}"  
                        id="${draggableElementId}" 
                      />
                      <button type="button" 
                        id="${draggableElementId}" 
                        class="remove_graph dropped"
                      >
                                      очистить
                      </button>`);
            event.target.children[1].addEventListener('click', ClearHandler)
            event.target.classList.add("dropped");
            const curId = event.target.id;
            boards[curId - 1].items = event.target.firstChild.id;
        }
    }
    function dragEnd(event){
    }

    function ClearHandler(event) {
        const paren = event.target.parentNode;
        while (paren.firstChild) {
            paren.removeChild(paren.firstChild);
        }
        paren.classList.remove("dropped");
    }


    function clearAfterSave(){
        document.getElementsByName("input_group").forEach(element => element.value = '');
        document.getElementsByName("insert_group").forEach(element => {
            if(element.childElementCount>0){
                element.removeChild(element.firstChild);
            }
            element.classList.remove("dropped");
        });
    }

    const SaveHandler = event =>
    {
        form.g1 = Number(boards[0].items);
        form.g1_title = document.getElementById("input1").value;
        form.g2 = Number(boards[1].items);
        form.g2_title = document.getElementById("input2").value;
        form.g3 = Number(boards[2].items);
        form.g3_title = document.getElementById("input3").value;
        form.g4 = Number(boards[3].items);
        form.g4_title = document.getElementById("input4").value;
        form.g5 = Number(boards[4].items);
        form.g5_title = document.getElementById("input5").value;
        form.g6 = Number(boards[5].items);
        form.g6_title = document.getElementById("input6").value;
        // setVisual_active(false);
        clearAfterSave();
    }


    clearAfterSave();


    const openModal = event => {
        setModalViewVisualActive(true);
    }

    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0">
                <div className="row left_part px-0 d-block">
                    <div className="col-12 px-0 mb-3">
                        <div className="background_title">
                            <h3 className="px-4 py-1 text-white">Визуализации данных</h3>
                        </div>
                    </div>
                    <div className="row col-12 m-0" style={{paddingLeft:"30px"}}>
                        {/*<div className="col-6">*/}
                        {/*    <ul className="list-group list-group-flush">*/}
                        {/*        {reports && reports.map(report =>*/}
                        {/*            <li className="list-group-item list-group-item-action pt-4"*/}
                        {/*                onClick={Reporthandler}*/}
                        {/*                id={`${report.id_reporting_format}`}*/}
                        {/*                value={`${report.id_reporting_format}`}>*/}
                        {/*                <div className="row justify-content-between"*/}
                        {/*                     onClick={Reporthandler}*/}
                        {/*                     id={`${report.id_reporting_format}`}*/}
                        {/*                >*/}
                        {/*                    <h5 className="col-8 mx-0 px-0"  onClick={Reporthandler}*/}
                        {/*                        id={`${report.id_reporting_format}`}>{report.title}</h5>*/}
                        {/*                    <button className=" col-3 mx-0 modal_button" type="button"*/}
                        {/*                            id={`${report.id_reporting_format}`}*/}
                        {/*                            onClick={()=>{*/}
                        {/*                                setModalViewVisualActive(true);*/}
                        {/*                            }}>*/}
                        {/*                        <i className="far fa-edit"></i> Графики*/}
                        {/*                    </button>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*        )}*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-6">*/}
                        {/*    <h5 className="examples_title">Примеры</h5>*/}
                        {/*    <ViewExampleReport current_report={current_report} exp_active={modalViewExpActive} setExp_active={setModalViewExpActive}/>*/}
                        {/*</div>*/}
                        {/*<Visual_modal form={form} setForm={setForm} current_report={current_report} setVisual_active={setModalViewVisualActive} visual_active={modalViewVisualActive}/>*/}
                        {/*<div className="row mx-3 my-2">*/}

                            <div className="col-6 position-relative">
                                <h5 className="mb-1">Разместите графики</h5>
                                <img src={baseUrl+"/graph_fon.png"} className="fon_maket"/>
                                <div style={{
                                    zIndex:'3',
                                    position:"absolute",
                                    top: "0",
                                    left: "0",
                                    width: "98%",
                                    height: "100%"

                                }}>
                                    <div className="row justify-content-end h-100">
                                        <div className="col-10 px-0">
                                            <div className="row h-100 align-items-end px-4">
                                                <div className="row px-0" style={{height:"70%"}}>
                                                    <div className="col-4 mb-2" id="1" style={{height:"38%", paddingLeft: "30px", paddingRight:"1px"}}>

                                                        <div name="insert_group" className="droppable card h-100 cell" id="1"
                                                             onDragOver={(e)=> dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-1 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>
                                                    </div>
                                                    <div className="col-4 mb-2" id="2" style={{height:"38%", paddingLeft: "23px", paddingRight:"1px"}}>
                                                        <div className="droppable card h-100 cell" id="2" name="insert_group"
                                                             onDragOver={(e)=> dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-2 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>

                                                    </div>
                                                    <div className="col-4 mb-2" id="3" style={{height:"38%", paddingLeft: "23px", paddingRight:"0px"}}>
                                                        <div className="droppable card h-100 cell" id="3" name="insert_group"
                                                             onDragOver={(e)=> dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-2 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>

                                                    </div>
                                                    <div className="col-4 mb-2" id="4" style={{height:"38%", paddingLeft: "30px", paddingRight:"1px"}}>

                                                        <div className="droppable card h-100 cell" id="4" name="insert_group"
                                                             onDragOver={(e)=> dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-1 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>

                                                    </div>
                                                    <div className="col-4 mb-2" id="5" style={{height:"38%", paddingLeft: "23px", paddingRight:"1px"}}>
                                                        <div className="droppable card h-100 cell" id="5" name="insert_group"
                                                             onDragOver={ (e)=>dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-2 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>

                                                    </div>
                                                    <div className="col-4 mb-2" id="6" style={{height:"38%", paddingLeft: "23px", paddingRight:"0px"}}>

                                                        <div className="droppable card h-100 cell" id="6" name="insert_group"
                                                             onDragOver={(e)=> dragOver(e)}
                                                             onDragEnter={(e)=> dragEnter(e)}
                                                             onDragLeave={(e) => dragLeave(e)}
                                                             onDrop={(e)=> drop(e)}
                                                        >
                                                        </div>
                                                        <input type="button" className="btn btn-sm mx-2 mt-1" id="input1" value="описание графика" onClick={(e)=>openModal(e)} style={{fontFamily: "montserrat", backgroundColor:"#FF5100CC", color:"white"}}/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 right_modal_part px-5">
                                <h5 className="mb-3">Графики</h5>
                                <div className="h-100 position-relative">
                                    <section className="row draggable-elements justify-content-center">
                                        <p>План/Факт</p>
                                        {graphsP && graphsP.map(graph =>
                                            <div className="col-3 mb-4" style={{overflow: "hidden"}} >
                                                <img className="visualGraph draggable"
                                                     draggable="true"
                                                     id={`${graph.constructor_chart}`}
                                                     data-images={baseUrl+ `/graph/${graph.layout_img}`}
                                                     src={baseUrl+`/graph/${graph.layout_img_variant}`}
                                                     onDragStart={(e)=> dragStart(e)}/>
                                            </div>
                                        )}
                                        <p>Стратегический анализ</p>
                                        {graphsS && graphsS.map(graph =>
                                            <div className="col-3 mb-4" style={{overflow: "hidden"}} >
                                                <img className="visualGraph draggable"
                                                     draggable="true"
                                                     id={`${graph.constructor_chart}`}
                                                     data-images={baseUrl+ `/graph/${graph.layout_img}`}
                                                     src={baseUrl+`/graph/${graph.layout_img_variant}`}
                                                     onDragStart={(e)=> dragStart(e)}/>
                                            </div>
                                        )}
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                {/*</div>*/}
            </div>
            <Visual_modal form={form} setForm={setForm} current_report={current_report} setVisual_active={setModalViewVisualActive} visual_active={modalViewVisualActive}/>
            <div className="button_place">
                <div className="row col-12 justify-content-end py-2">
                    <input type="button" name="previous" className="previous action-button shadow" value="Вернуться"/>
                    {choise === true ? <input type="button" name="next" className="next action-button shadow" value="К следующему шагу"/> :
                        <input type="button" name="next" id="next" className="next action-button shadow" value="К следующему шагу"/>}
                </div>
            </div>
        </fieldset>
    )
}
