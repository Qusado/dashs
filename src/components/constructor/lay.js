import {useCallback, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import {PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {$host} from "../../http";
import "../../pdf_style.css"
import {View_maket} from "../View_maket";
import {Lol} from "../lol";
import {baseUrl} from "../baseRoute";

export const Lay = ({form, setForm, createMaket, current_kpi_panel, setCurrent_kpi_panel}) => {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [menu, setMenu] = useState()
    const [filter, setFilter] = useState()
    const [kpi, setKpi] = useState()
    const [visual, setVisual] = useState()
    const [report, setReport] = useState()
    const [charts, setCharts] = useState()
    const [graphs, setGraphs] = useState([
        {id:1, id_g:'', title:"", img:'', desc:''},
        {id:2, id_g:'', title:"", img:'', desc:''},
        {id:3, id_g:'', title:"", img:'', desc:''},
        {id:4, id_g:'', title:"", img:'', desc:''},
        {id:5, id_g:'', title:"", img:'', desc:''},
        {id:6, id_g:'', title:"", img:'', desc:''}
    ])
    const [cards, setCards] = useState([])



    const getMenu = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/menu/${form.menu_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const m = res.data;
                setMenu(m)
            })
        } catch (e){

        }
    }, [token, form.menu_id, request ]);

    const getFilter = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/filter/${form.filter_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const f = res.data;
                setFilter(f)
            })
        } catch (e){

        }
    }, [token, form.filter_id, request ]);

    const getKpi = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/kpi/${form.kpi_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const k = res.data;
                setKpi(k)
            })
        } catch (e){

        }
    }, [token, form.kpi_id, request ]);

    const getVisual = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/visual/${form.visual_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const v = res.data;
                setVisual(v)
            })
        } catch (e){

        }
    }, [token, form.visual_id, request ]);

    const getReport = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/report/${form.report_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const r = res.data;
                setReport(r)
            })
        } catch (e){

        }
    }, [token, form.report_id, request ]);

    const getCharts = useCallback(async ()=>{
        try{
            const params = {
                g1: form.g1,
                g2: form.g2,
                g3: form.g3,
                g4: form.g4,
                g5: form.g5,
                g6: form.g6
            };
            const fetched = await $host.get(`/api/chart/exportReport/charts`, {
                params,
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const c = res.data;
                if(c!=="no graphs"){
                    setCharts(c);
                }else{}
            })
        } catch (e){}
    }, [token, form, request ]);


    useEffect( () =>{
        getMenu()
        getFilter()
        getKpi()
        getVisual()
        getReport()
        getCharts()
    }, [getMenu, getFilter, getKpi, getVisual, getReport, getCharts])





    const box = React.useRef(null);
    const exportPDFWithMethod = () => {
        let element = box.current || document.body;
        savePDF(element, {
            paperSize: "auto",
            margin: 40,
            fileName: `Report for ${new Date().getFullYear()}`
        });
    }

    if(charts){
        graphs[0].id_g = form.g1;
        graphs[0].desc = form.g1_title;
        graphs[1].id_g = form.g2;
        graphs[1].desc = form.g2_title;
        graphs[2].id_g = form.g3;
        graphs[2].desc = form.g3_title;
        graphs[3].id_g = form.g4;
        graphs[3].desc = form.g4_title;
        graphs[4].id_g = form.g5;
        graphs[4].desc = form.g5_title;
        graphs[5].id_g = form.g6;
        graphs[5].desc = form.g6_title;
        for (var i = 0; i < graphs.length; i++) {
            for (var k = 0; k < charts.length; k++){
                if(Number(graphs[i].id_g) === charts[k].constructor_chart){
                    graphs[i].title = charts[k].title;
                    graphs[i].img = charts[k].layout_img;
                }
            }
        }
    }

    if(current_kpi_panel){
        cards.splice(0, cards.length);
        for(let a = 0; a < current_kpi_panel.length; a++){
            if(current_kpi_panel[a].id===true){
                cards.push(current_kpi_panel[a]);
            }
        }
    }

    function emailHandler(event) {
        document.getElementById("comment_email").value = event.target.value;
    }
    function costHandler(event) {
        document.getElementById("comment_cost").value = event.target.value;
    }
    function clientHandler(event) {
        document.getElementById("comment_client").value = event.target.value;
    }
    function employerHandler(event) {
        document.getElementById("comment_employer").value = event.target.value;
    }
    function companyHandler(event) {
        document.getElementById("comment_company").value = event.target.value;
    }
    function pmHandler(event) {
        document.getElementById("comment_pm").value = event.target.value;
    }



    return(
        <fieldset style={{backgroundColor: 'white'}}>
            <div className="row container-fluid w-100 p-0 m-0">
                <div className="col-12 px-0">
                    <div className="background_title">
                        <h3 className="px-4 py-1 text-white">Представление отчета</h3>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="row justify-content-center">
                        <div className="col-8" style={{marginRight:'20px', marginBottom:'3vh'}}>
                            {/*form.menu_id!==0 && form.kpi_id!==0 && form.filter_id!==0 && form.visual_id!==0 &&*/}
                            {
                                <PDFExport paperSize="auto" margin={20} fileName={`Report for ${new Date().getFullYear()}`}>
                                    <div ref={box}>
                                        <div className="row px-4">
                                            <h6 className=""><strong>Прототип</strong></h6>
                                        </div>
                                        <div className="maket" id="maket">
                                            <View_maket form={form}/>
                                        </div>
                                        {/*<div className="row px-4">*/}
                                        {/*    <h6 className="mt-3"><strong>Графики</strong></h6>*/}
                                        {/*    {charts ?*/}
                                        {/*        <div className="row">*/}
                                        {/*            <div className="col-10 row">*/}
                                        {/*                <div className="col-4 mb-2" id="1"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input1" value={form.g1_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[0].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[0].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="col-4 mb-2" id="2"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input2" value={form.g2_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[1].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[1].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="col-4 mb-2" id="3"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input3" value={form.g3_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[2].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[2].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="col-4 mb-4" id="4"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input4" value={form.g4_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[3].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[3].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="col-4 mb-4" id="5"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input5" value={form.g5_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[4].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[4].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="col-4 mb-4" id="6"*/}
                                        {/*                     style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*                    <input type="text" name="input_group"*/}
                                        {/*                           className="form-control form-control-sm mb-1"*/}
                                        {/*                           id="input6" value={form.g6_title} disabled/>*/}
                                        {/*                    <img className="pdf_img"*/}
                                        {/*                         src={baseUrl + `/graph/${graphs[5].img}`}/>*/}
                                        {/*                    <figure className="text-end">*/}
                                        {/*                        <p>{graphs[5].title}</p>*/}
                                        {/*                    </figure>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        :*/}
                                        {/*        <div className="h6 mt-1">Графики не указаны</div>*/}
                                        {/*    }*/}
                                        {/*</div>*/}
                                        {/*<div className="row px-4">*/}
                                        {/*    <h6 className="mt-3"><strong>Показатели</strong></h6>*/}
                                        {/*    {cards.length>=1 ? cards.map(card =>*/}
                                        {/*        <div className="col-6 mb-2"*/}
                                        {/*             style={{paddingLeft: "20px", paddingRight: "1px"}}>*/}
                                        {/*            <div className="card p-2" style={{backgroundColor: '#E9ECEF'}}>*/}
                                        {/*                <div className="text-center mb-0"><strong>{card.title}</strong></div>*/}
                                        {/*                <div className="text-center p-0 mb-0" style={{fontSize: "1.5rem"}}><strong>{card.fact}</strong></div>*/}
                                        {/*                <div className="text-center p-0 mb-0"><p className="fw-light mb-0">{card.plan}</p></div>*/}
                                        {/*                <div className="text-center mb-0">{card.per_dev && <span>&#8679; %</span>}{card.num_dev && <span>&#8679; $</span>}</div>*/}
                                        {/*                <div className="text-center p-0"><p className="fw-light">{card.graph}</p></div>*/}

                                        {/*            </div>*/}
                                        {/*        </div>*/}

                                        {/*        )*/}


                                        {/*        :*/}
                                        {/*        <div className="h6 mt-1">Показатели не указаны</div>*/}
                                        {/*    }*/}
                                        {/*</div>*/}

                                        {/*<h6 className="px-4" >Комментарии</h6>*/}
                                        {/*<ul style={{listStyle:'none'}}>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Email</strong></p>*/}
                                        {/*        <input style={{border:"none"}} id="comment_email"/>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Заказчик</strong>*/}
                                        {/*        </p><input style={{border:"none"}} id="comment_client"/>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Проектный менеджер</strong>*/}
                                        {/*        </p><input style={{border:"none"}} id="comment_pm"/>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Исполнитель</strong>*/}
                                        {/*        </p><input style={{border:"none"}} id="comment_employer"/>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Компания</strong>*/}
                                        {/*        </p><input style={{border:"none"}} id="comment_company"/>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="mb-3">*/}
                                        {/*        <p className="mb-1"><strong>Прогнозируемая цена</strong>*/}
                                        {/*        </p><input style={{border:"none"}} id="comment_cost"/>*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                    </div>
                                </PDFExport>
                            }
                        </div>

                        <div className="col-3">
                            <form>
                                <h5 className="pt-0 pb-2">Комментарии к отчету</h5>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control form-control-sm" id="floatingInput" onChange={emailHandler}/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={clientHandler}/>
                                    <label htmlFor="floatingInput">Заказчик</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={pmHandler}/>
                                    <label htmlFor="floatingInput">Проектный менеджер</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={employerHandler}/>
                                    <label htmlFor="floatingInput">Исполнитель</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={companyHandler}/>
                                    <label htmlFor="floatingInput">Компания</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={costHandler}/>
                                    <label htmlFor="floatingInput">Прогнозируемая цена</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 px-5" style={{marginBottom:'20vh'}}>
                            <hr className="k-hr"/>
                            <h5 className="pt-0 pb-2">Предпросмотр таблицы</h5>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Объект</th>
                                    <th scope="col">Наименование показателя измерения</th>
                                    <th scope="col">Название в отчете</th>
                                    <th scope="col">Бизнес-условие \Формула</th>
                                    <th scope="col">Тех. условие</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Фильтр</td>
                                    <td>ФИО</td>
                                    <td>Ответственный менеджер</td>
                                    <td>Для фильтрации отчета по ответственному менеджеру (работающий над текущей слелкой</td>
                                    <td>Чекбокс</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Фильтр</td>
                                    <td>Дом ( или земельные участки, здания, сооружения и иные объекты)</td>
                                    <td>Объект недвижимости</td>
                                    <td>Выбор объекта недвижимости (земельные участки, здания, сооружения и иные объекты) Для фильтрации отчета и анализа информации по конкретному объекту недвижимости</td>
                                    <td>Чекбокс</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Фильтр</td>
                                    <td>ЖК, наименование</td>
                                    <td>ЖК</td>
                                    <td>Для фильтрации отчета по конкретному ЖК</td>
                                    <td>Чекбокс</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Фильтр</td>
                                    <td>Сегмент, наименование</td>
                                    <td>Сегмент</td>
                                    <td> Для фильтрации отчета по конкретному сегменту</td>
                                    <td>Чекбокс</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Фильтр</td>
                                    <td>Например: 2015</td>
                                    <td>Год</td>
                                    <td>Перечень годов, за которые имеется отчетность</td>
                                    <td>Ползунок</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Показатель</td>
                                    <td>-</td>
                                    <td>Всего (руб)</td>
                                    <td>Общая стоимость жилого комплекса</td>
                                    <td>Сумма по fact_properties_custom_fields[Price], с условием если ПУСТО то 0</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Показатель</td>
                                    <td>-</td>
                                    <td>Всего (шт)</td>
                                    <td>Общее кол-во квартир в жк</td>
                                    <td>Количесвто уникальных квартир = DISTINCTCOUNT ( fact_properties_custom_fields[properties_id] )</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Показатель</td>
                                    <td>-</td>
                                    <td>Цена за м2 (руб)</td>
                                    <td>Стоимость квартиры\(Площадь без балкона + Площадь балкона * каоэффициент)</td>
                                    <td>Отображение: числом и в процентах; Сумма по fact_properties_custom_fields[Price] делим на fact_properties_custom_fields[area_balcony] + fact_properties_custom_fields[area_without_balcony] ) *  # коэффициент при старте'[коэффициент при старте]</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Показатель</td>
                                    <td>-</td>
                                    <td>Остатки (м2)</td>
                                    <td>Сумма площади квартир,  с коэфициентом балкона 0,5. если способ покупки по ДДУ или цессии, если ДКП то с коэфициентом балкона 1 (в статусе Profitbase "свободно", "бронь" или "на оформлении")</td>
                                    <td>{` Сумма площади квартир = ( [# AreaWithBalconyDynamic] => фильтр по статусу Profitbase = dim_properties_statuses[base_status] IN { EXECUTION } если # коэффициент при старте'[коэффициент при старте] = 0,5 в противном случае  Сумма площади квартир = ( [# AreaWithBalconyDynamic]
                                        фильтруем по статусу Profitbase = dim_properties_statuses[base_status] IN { "AVAILABLE"; "BOOKED"; "EXECUTION }" `}</td>

                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Показатель</td>
                                    <td>-</td>
                                    <td>Бюджет (руб)</td>
                                    <td>Cтоимость проданных квартир</td>
                                    <td>{` "Бюджет = (сумма 'fact_leads_custom_fields'[sale],  фильтр Profitbase dim_properties_statuses[base_status]
                                        IN { "SOLD"; "EXECUTION" } ) с условием если ПУСТО то 0" `}
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">11</th>
                                    <td>Пузырьковая диаграмма рассеяния (1)</td>
                                    <td>Штуки</td>
                                    <td>Остатки</td>
                                    <td>"Остаток квартир в продаже штуки.   какой объем объектов в жилом комплексе в продаже,
                                        % - остаток от общего объема жилого комплекса"
                                    </td>
                                    <td>{` Количество уникальных по полю fact_properties_events_change_status[properties_id] 
                                        имеющие статус dim_properties_statuses[base_status] = { AVAILABLE; BOOKED; EXECUTION }`}</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Гистограмма (2)
                                    </td>
                                    <td>Дни</td>
                                    <td>Средний срок сделки</td>
                                    <td>Разница в днях между датой создания сделки и датой закрытия сделки в статусе Успешно реализовано по квартирам в статусе продано</td>
                                    <td>Кол-во дней от dim_houses[dev_start] до dim_houses[dev_end] / последний день для выбраного месяца = DAY ( EOMONTH ( MIN ( 'Dim_Date'[Date] ); 0 ) )
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td>Гистограмма (3)
                                    </td>
                                    <td>Месяца</td>
                                    <td>Срок строительства</td>
                                    <td>Дата окончания строительства - Дата начала строительства</td>
                                    <td>Кол-во дней от dim_houses[dev_start] до dim_houses[dev_end] / последний день для выбраного месяца = DAY ( EOMONTH ( MIN ( 'Dim_Date'[Date] ); 0 ) )</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td>Горизонтальная гистограмма (4)
                                    </td>
                                    <td>М2</td>
                                    <td>Количество проданных квартир</td>
                                    <td>Сколько м2 продали на дату анализа</td>
                                    <td>м2 площадь с коэф. = (fact_properties_custom_fields[area_balcony] + fact_properties_custom_fields[area_without_balcony] ) *  # коэффициент при старте'[коэффициент при старте]); фильтр по статусу Profitbase = dim_properties_statuses[base_status] = "SOLD"</td>
                                </tr>
                                <tr>
                                    <th scope="row">15</th>
                                    <td>Гистограмма с групировкой (5)
                                    </td>
                                    <td>М2</td>
                                    <td>Усредненный темп продаж</td>
                                    <td>Сколько планируем продавать в среднем  в месяц</td>
                                    <td>м2 площадь с коэф. = ((fact_properties_custom_fields[area_balcony] + fact_properties_custom_fields[area_without_balcony] ) *  # коэффициент при старте'[коэффициент при старте]); фильтр по статусу Profitbase = dim_properties_statuses[base_status] = "SOLD") / Срок продаж мес = (dim_houses[sales_start] до dim_houses[dev_end] / последний день для выбраного месяца = DAY ( EOMONTH ( MIN ( 'Dim_Date'[Date] ); 0 ) ) )</td>
                                </tr>
                                <tr>
                                    <th scope="row">16</th>
                                    <td>Круговая диаграмма (6)
                                    </td>
                                    <td></td>
                                    <td>Остаток по сегментам</td>
                                    <td> визуальное отображения остатка квартир  (руб, м2, шт)</td>
                                    <td>"В зависимости от выбранного типа (руб; шт; м)
                                        выводится ранее описанные: [# Остатки руб];  [# Остатки шт]; [# Остатки м2]"
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button_place">
                <div className="row col-12 justify-content-end py-2">
                    <button type="button" name="next"
                            className="col-3 save_btn action-button shadow mx-2"
                            onClick={exportPDFWithMethod}
                    >
                        <i className="fas fa-file-download"></i> Скачать прототип</button>
                    <button type="button" name="next"
                            className="col-3 save_btn action-button shadow"
                            onClick={exportPDFWithMethod}
                    >
                        <i className="fas fa-file-download"></i> Скачать таблицу</button>
                </div>
            </div>
        </fieldset>
    )
}
