import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {baseUrl} from "./baseRoute";


export const FirstMainBlock = () => {
    return (

        <div className="">
            <img className="BackPic" src={baseUrl+"/fon4.png"}/>
            <div className="container" style={{
                zIndex:'3',
                position:"absolute",
                top: "7vh",
                left: "5vw",
                width: '100%'

            }}>
                <div className="row">
                    <div className="col-8 main_first_phrase text-left">
                        <h1 className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 main_second_phrase text-right">
                        <h3>Eget arcu dictum varius duis at consectetur lorem donec massa.</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/constructor">
                        <button type="button" className="btn btn-lg my-5 btn-primary bigbut">
                            Создать свой дашборд
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )}
