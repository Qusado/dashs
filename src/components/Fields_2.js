import React, {useCallback, useContext, useEffect, useState} from 'react'
import $ from "jquery";
import {AuthContext} from "../context/Auth.Context";
import {Menu} from "./constructor/menu";
import {Filter} from "./constructor/filter";
import {KPI} from "./constructor/kpi";
import {Report} from "./constructor/report";
import {Lay} from "./constructor/lay.js";
import {Visual_part} from "./constructor/visual_part";

export const Fields_2 = () => {

    const {userId, token} = useContext(AuthContext)
    const [form, setForm] = useState({
        menu_id: 0,
        filter_id: 0,
        kpi_id: 0,
        visual_id: 0,
        report_id: 0,
        g1: null,
        g1_title: '',
        g2: null,
        g2_title: '',
        g3: null,
        g3_title: '',
        g4: null,
        g4_title: '',
        g5: null,
        g5_title: '',
        g6: null,
        g6_title: '',
        kpi_panel_id: 0
    });

    const [current_kpi_panel, setCurrent_kpi_panel] = useState([
        {id:false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""},
        {id:false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""},
        {id:false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""},
        {id: false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""},
        {id: false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""},
        {id: false, title:"", fact:"", plan:"", per_dev: false, num_dev:false, graph:""}
    ]);

    const [createMaket, setCreateMaket] = useState(false);
    const [updateMaket, setUpdateMaket] = useState(false);
    $(document).ready(function(){
        var current_fs, next_fs, previous_fs;
        var opacity;
        $(".next").click(function(){
            current_fs = $(this).parent().parent().parent();
            next_fs = $(this).parent().parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                    opacity = 1 - now;
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({'opacity': opacity});
                },
                duration: 500
            });
        });
        $(".previous").click(function(){
            current_fs = $(this).parent().parent().parent();
            previous_fs = $(this).parent().parent().parent().prev();
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            previous_fs.show();
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                    opacity = 1 - now;
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({'opacity': opacity});
                },
                duration: 500
            });
        });
    });

    return(
        <div className="form mx-0 w-100">
            <form id="msform">
                <Menu form={form} setForm={setForm}/>
                <Filter form={form} setForm={setForm} />
                <KPI form={form} setForm={setForm}
                     current_kpi_panel={current_kpi_panel}
                     setCurrent_kpi_panel={setCurrent_kpi_panel}/>
                <Report form={form} setForm={setForm}/>
                <Visual_part form={form} setForm={setForm} createMaket={createMaket} setCreateMaket={setCreateMaket}/>
                <Lay form={form} setForm={setForm}
                     createMaket={createMaket}
                     current_kpi_panel={current_kpi_panel}
                     setCurrent_kpi_panel={setCurrent_kpi_panel}/>
                <ul id="progressbar" className="fixed-bottom">
                    <li className="active" id="menu"><h6>Меню</h6></li>
                    <li id="filter"><h6>Фильтр</h6></li>
                    <li id="kpi"><h6>Показатели</h6></li>
                    <li id="graph"><h6>Графики</h6></li>
                    <li id="visual"><h6>Визуализация</h6></li>
                    <li id="confirm"><h6><i className="fas fa-border-all"></i> Макет</h6></li>
                </ul>
            </form>
        </div>
    );
}
