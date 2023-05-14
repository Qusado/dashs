import {useCallback, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {baseUrl} from "./baseRoute";

export const Pdf_doc = ({form, menu, kpi, filter, visual, report, charts, graphs}) => {
    const box = React.useRef(null);
    const pdfExportComponent = React.useRef(null);

    return(
        <PDFExport ref={pdfExportComponent} paperSize="auto" margin={20} fileName={`Report for ${new Date().getFullYear()}`}>
            <div ref={box}>
                <h5 className="text-center">Техническое описание отчета</h5>
                <hr className="k-hr"/>
                <div className="row">
                    <div className="col-12">
                        <div className="row px-4">
                            <h6 className="mt-3"><strong>Компоненты</strong></h6>
                            <div className="col-3">
                                <p>{menu.title}</p>
                                <img src={baseUrl+`/mini/${menu.layout_img}`}/>
                            </div>
                            <div className="col-3">
                                <p>{filter.title}</p>
                                <img src={baseUrl+`/mini/${filter.layout_img}`}/>
                            </div>
                            <div className="col-3">
                                <p>{kpi.title}</p>
                                <img src={baseUrl+`/mini/${kpi.layout_img}`}/>
                            </div>
                            <div className="col-3">
                                <p>{visual.title}</p>
                                <img src={baseUrl+`/mini/${visual.layout_img}`}/>
                            </div>
                        </div>
                        <div className="row px-4">
                            <div className="h6 mt-3"><strong>Форма отчетности</strong> </div>
                            <div className="h6 mt-1">{report.title}</div>
                            <h6 className="mt-3"><strong>Графики</strong></h6>
                            {charts ?
                                <div className="row">
                                    <div className="col-10 row">
                                        <div className="col-4 mb-2" id="1"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input1" value={form.g1_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[0].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[0].title}</p>
                                            </figure>
                                        </div>
                                        <div className="col-4 mb-2" id="2"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input2" value={form.g2_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[1].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[1].title}</p>
                                            </figure>
                                        </div>
                                        <div className="col-4 mb-2" id="3"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input3" value={form.g3_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[2].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[2].title}</p>
                                            </figure>
                                        </div>
                                        <div className="col-4 mb-4" id="4"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input4" value={form.g4_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[3].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[3].title}</p>
                                            </figure>
                                        </div>
                                        <div className="col-4 mb-4" id="5"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input5" value={form.g5_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[4].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[4].title}</p>
                                            </figure>
                                        </div>
                                        <div className="col-4 mb-4" id="6"
                                             style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                            <input type="text" name="input_group"
                                                   className="form-control form-control-sm mb-1"
                                                   id="input6" value={form.g6_title} disabled/>
                                            <img className="pdf_img"
                                                 src={baseUrl + `/graph/${graphs[5].img}`}/>
                                            <figure className="text-end">
                                                <p>{graphs[5].title}</p>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="h6 mt-1">Графики не указаны</div>
                            }
                        </div>
                    </div>
                </div>
                <hr className="k-hr"/>
                <h6 className="px-4" >Комментарии</h6>
                <ul style={{listStyle:'none'}}>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Email</strong></p>
                        <input style={{border:"none"}} id="comment_email"/>
                    </li>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Заказчик</strong>
                        </p><input style={{border:"none"}} id="comment_client"/>
                    </li>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Проектный менеджер</strong>
                        </p><input style={{border:"none"}} id="comment_pm"/>
                    </li>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Исполнитель</strong>
                        </p><input style={{border:"none"}} id="comment_employer"/>
                    </li>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Компания</strong>
                        </p><input style={{border:"none"}} id="comment_company"/>
                    </li>
                    <li className="mb-3">
                        <p className="mb-1"><strong>Прогнозируемая цена</strong>
                        </p><input style={{border:"none"}} id="comment_cost"/>
                    </li>
                </ul>
            </div>
        </PDFExport>
    )
}
