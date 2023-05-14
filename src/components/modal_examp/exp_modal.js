import React from 'react';
import "./exp_modal.css";
import {baseUrl} from "../baseRoute";

export const Exp_modal = ({exp_active, setExp_active, title, path, description, url}) => {
    return(
        <div className={exp_active? "modal_e active" : "modal_e"} onClick={()=> {
            setExp_active(false);
        }}>
            <div className={exp_active? "modal_e__content active" : "modal_e__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setExp_active(false)}}>&times;</a>
                 {title && url &&
                    <div className="px-2 py-3">
                        <span className="h3">Пример </span>
                        <a className="text-decoration-underline text-info" href={`${url}`} >
                            <span className="h3">{title}</span>
                        </a>
                    </div>
                }
                <div className="row" style={{height: '63vh', width: '100%', overflow: 'hidden'}}>
                   <div className="col-9" >
                       {path && <img src={baseUrl+`/exp/${path}`} style={{objectFit: 'contain'}}/>}
                   </div>
                    <div className="col-3">
                        <h5 className="examples_title">Описание</h5>
                        <div className="col-12 exp_description">
                            {description && <p>{description}</p>}
                        </div>

                    </div>
                    <div className="col-3 pt-4">
                    </div>

                </div>
            </div>

        </div>
    )
};
