import React, {useCallback, useContext, useEffect, useState} from "react";
import {ViewVisualTitle} from "../Component_title/ViewVisualTitle";
import {ViewLayoutVisual} from "../Component_layout/ViewLayoutVisual";
import {ViewVisualDiscript} from "../Component_description/ViewVisualDiscript";
import {ViewExampleVisual} from "../Component_example/ViewExampleVisual";
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {$host} from "../../http";
import {baseUrl} from "../baseRoute";

export const Visual_part = ({form, setForm, createMaket, setCreateMaket})=> {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [visuals, setVisuals] = useState()
    const [choise, setchoise] = useState(false)

    const getVisuals = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/visual`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const v = res.data;
                setVisuals(v);
            });
        } catch (e){}
    }, [token, request ])

    const [current_visual, setCurrentVisual] = useState({
        visual_id: '', title:''
    });
    const [modalViewExpActive, setModalViewExpActive] = useState(false);

    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');

    })

    const Visualhandler = event =>{
        setCurrentVisual({visual_id: event.target.id, title: event.target.getAttribute("data-title")})
        setForm({...form, visual_id: Number(event.target.id)});
        setchoise(true);
    };

    const addLayouthandler = async () => {
        try {
            const data = await $host.post(`/api/layout/`,{...form}, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res=>{
                setCreateMaket(true);
            });
        }
        catch (e) {}
    }

    useEffect(()=>{
        getVisuals()
    }, [getVisuals])

    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0 justify-content-center">
                <div className="col-10 px-0 left_part">
                    <div className="row col-12 m-0 p-0 justify-content-start">
                        <div className="col-12 px-0 mb-2">
                            <div className="background_title">
                                <ViewVisualTitle current_visual={current_visual}/>
                            </div>
                        </div>
                        <div className="col-8" style={{paddingLeft: "30px", paddingRight: "0px"}}>
                            <div className="row">
                                <div id="view_board" className="view_board mb-2 px-0 col-12">
                                    <div className="box">
                                        <div id="m-6" className="Hide">
                                            <ViewLayoutVisual current_visual={current_visual}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pb-2" style={{paddingRight: "30px", paddingLeft: "0px"}}>
                            <h5 className="examples_title">Описание</h5>
                            <ViewVisualDiscript current_visual={current_visual}/>
                        </div>
                        <div className="col-12" style={{paddingLeft: "30px"}}>
                            <h5 className="examples_title">Примеры</h5>
                        </div>
                        <div className="col-8">
                            <ViewExampleVisual current_visual={current_visual} exp_active={modalViewExpActive} setExp_active={setModalViewExpActive}/>
                        </div>
                    </div>
                </div>
                <div className="col-2 right_part m-0" style={{padding: '0px'}}>
                    <div className="h-100 position-relative">
                        <div className="praon29">
                            {visuals && visuals.map((visual, index) => {
                                return (
                                    <>
                                        <input type="radio" name="visual_id" className="visual_id"
                                               id={`${visual.id_constructor_visual}`}
                                               value={`${visual.id_constructor_visual}`}/>
                                        <label htmlFor={`${visual.id_constructor_visual}`}>
                                            <div className="praon30 px-4 py-5 "
                                                 name="visual_id"
                                                 id={`${visual.id_constructor_visual}`}
                                                 data-title={`${visual.title}`}
                                                 onClick={Visualhandler}
                                            >
                                                <img src={baseUrl+`/mini/${visual.layout_img}`}
                                                     name="visual_id"
                                                     className="shadow-5-strong"
                                                     id={`${visual.id_constructor_visual}`}
                                                     data-title={`${visual.title}`}
                                                     value={`${visual.id_constructor_visual}`}
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
                    {choise === true ?
                        <button type="button" name="next" className="next action-button shadow" onClick={addLayouthandler}>
                            <i className="fas fa-check-square"></i> собрать макет
                        </button>
                        :
                        <button type="button" name="next" id="next" className="next action-button shadow disabled" disabled>
                            <i className="fas fa-check-square"></i> собрать макет
                        </button>
                    }
                </div>
            </div>
        </fieldset>
    )
}
