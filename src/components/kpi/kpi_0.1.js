import React, {useContext, useState} from 'react'
import {baseUrl} from "../baseRoute";
import {KPI_modal} from "../modal_kpi/KPI_modal";




export const Kpi_01 = ({form, setForm, kpi_active, setKPI_active, current_kpi_panel, setCurrent_kpi_panel}) => {
    const [current_card, setCurrent_card] = useState();
    const OpenModal = event => {
        setCurrent_card(event.target.id);
        setKPI_active(true);
    }
    return (
        <div className="position-relative">
            <div className="box_card container">
                <div className="row">
                    <div className="col-3">
                        <div className="p_card modal_card">
                            <div className="card">
                                <div className="text-center mb-0 title_kpi">Title1</div>
                                <div className="text-center p-0 mb-1 num_kpi">7854 млн</div>
                                <div className="text-center green_kpi"> &#8679; +15%</div>
                                <div className="overlay text-center" id="0" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="0" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi"> &#8681; -0.98%</div>
                                <div className="overlay text-center" id="1" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="1" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi">7854 млн</div>
                                </div>
                                <div className="card-text text-center green_kpi"> &#8679; +15%</div>
                                <div className="overlay text-center" id="2" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="2" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi"> &#8681; -0.98%</div>
                                <div className="overlay text-center" id="3" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="3" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi">7854 млн</div>
                                </div>
                                <div className="card-text text-center green_kpi"> &#8679; +15%</div>
                                <div className="overlay text-center" id="4" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="4" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi"> &#8681; -0.98%</div>
                                <div className="overlay text-center" id="5" onClick={(e)=>OpenModal(e)
                                }>
                                    <img style={{width:'60%'}} id="5" onClick={(e)=>OpenModal(e)}
                                         src={baseUrl+ '/icons/hand_w.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mask">
                <img className="img-fluid" src={baseUrl+"/frames/Frame 43.svg"}/>
            </div>
            <KPI_modal form={form}
                       setForm={setForm}
                       kpi_active={kpi_active}
                       setKPI_active={setKPI_active}
                       current_card = {current_card}
                       setCurrent_card = {setCurrent_card}
                       current_kpi_panel={current_kpi_panel}
                       setCurrent_kpi_panel={setCurrent_kpi_panel}
            />
        </div>

    )
}
