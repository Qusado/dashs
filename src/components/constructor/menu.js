import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {ViewMenuTitle} from "../Component_title/ViewMenuTitle";
import {ViewLayoutMenu} from "../Component_layout/ViewLayoutMenu";
import {ViewMenuDescript} from "../Component_description/ViewMenuDescript";
import {ViewExampleMenu} from "../Component_example/ViewExampleMenu";
import {$host} from "../../http";
import {baseUrl} from "../baseRoute";



export const Menu = ({form, setForm}) =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [menus, setMenus] = useState()
    const [choise, setChoise] = useState(false);
    const getMenus = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/menu`, {
                headers:{
                        authorization:"Bearer "+token,
                }
            }).then(res => {
                const m = res.data;
                setMenus(m);
            });
        } catch (e){

        }
    }, [token, request ])

    const [current, setCurrent] = useState({
        menu_id: '', title:''
    });
    const [modalViewExpActive, setModalViewExpActive] = useState(false);

    if(document.getElementsByClassName("shadow-5-strong")) {

        console.log(document.getElementsByClassName("praon30")[0]);
    }


    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');
    })


    const Menuhandler = event =>{
        setCurrent({menu_id: event.target.id, title: event.target.getAttribute("data-title")});
        setForm({...form, menu_id: Number(event.target.id)});
        setChoise(true);
    }

    useEffect(()=>{
        getMenus()
    }, [getMenus])

    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0 justify-content-center">
                <div className="col-10 px-0 left_part">
                    <div className="row col-12 m-0 p-0 justify-content-start">
                        <div className="col-12 px-0 mb-2">
                            <div className="background_title">
                                <ViewMenuTitle current_menu={current}/>
                            </div>
                        </div>
                        <div className="col-8" style={{paddingLeft:"30px", paddingRight:"0px"}}>
                            <div className="row">
                                <div id="view_board" className="view_board mb-2 px-0 col-12">
                                    <div className="box">
                                    <ViewLayoutMenu current_menu={current}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pb-2" style={{paddingRight:"30px", paddingLeft:"0px"}}>
                            <h5 className="examples_title">Описание</h5>
                            <ViewMenuDescript current_menu={current}/>
                        </div>
                        <div className="col-12" style={{paddingLeft:"30px"}}>
                            <h5 className="examples_title">Примеры</h5>
                        </div>
                        <div className="col-8">
                            <ViewExampleMenu current_menu={current} exp_active={modalViewExpActive} setExp_active={setModalViewExpActive}/>
                        </div>
                    </div>
                </div>
                <div className="col-2 right_part m-0" style={{ padding: '0px'}}>
                    <div className="h-100 position-relative">
                        <div className="praon29" id="mother_id">
                            { menus && menus.map((menu, index) => {
                                return(
                                    <>
                                        <input type="radio" name="menu_id" className="menu_id" id={`${menu.id_constructor_menu}`} value={`${menu.id_constructor_menu}`}/>
                                        <label for={`${menu.id_constructor_menu}`}>
                                            <div className="praon30 px-4 py-5 "
                                                 name="menu_id"
                                                 id={`${menu.id_constructor_menu}`}
                                                 data-title={`${menu.title}`}
                                                 onClick={Menuhandler}
                                            >
                                                <img src={baseUrl+`/mini/${menu.layout_img}`}
                                                     name="menu_id"
                                                     className="shadow-5-strong"
                                                     id={`${menu.id_constructor_menu}`}
                                                     data-title={`${menu.title}`}
                                                     value={`${menu.id_constructor_menu}`}
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
                    {choise === true ? <input type="button" name="next" className="next action-button shadow" value="К следующему шагу"/> :
                        <input type="button" name="next" id="next" className="next action-button shadow disabled" value="К следующему шагу" disabled/>}
                </div>
            </div>
        </fieldset>
    )
}
