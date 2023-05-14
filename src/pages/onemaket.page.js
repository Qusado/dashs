import React, {useContext} from 'react'
import {Menu_01} from "../components/menu/menu_0.1";
import {Link, useParams} from "react-router-dom";
import {Menu_02} from "../components/menu/menu_0.2";
import {Menu_03} from "../components/menu/menu_0.3";
import {Menu_04} from "../components/menu/menu_0.4";
import {Menu_05} from "../components/menu/menu_0.5";
import {Filter_01} from "../components/filter/filter_0.1";
import {Filter_02} from "../components/filter/filter_0.2";
import {Menu_06} from "../components/menu/menu_0.6";
import {Filter_03} from "../components/filter/filter_0.3";
import {Kpi_01} from "../components/kpi/kpi_0.1";
import {Kpi_02} from "../components/kpi/kpi_0.2";
import {Kpi_03} from "../components/kpi/kpi_0.3";




export const OnemaketPage = () =>{
    const maket_id = useParams().id_maket

    return(
        <div className="">
            {maket_id==1 && <Menu_01/>}
            {maket_id==2 && <Menu_02/>}
            {maket_id==3 && <Menu_03/>}
            {maket_id==4 && <Menu_04/>}
            {maket_id==5 && <Menu_05/>}
            {maket_id==8 && <Menu_06/>}


            {maket_id ==6 && <Filter_01/>}
            {maket_id ==7 && <Filter_02/>}
            {maket_id ==9 && <Filter_03/>}


            {maket_id == 10 && <Kpi_01/>}
            {maket_id == 11 && <Kpi_02/>}
            {maket_id == 12 && <Kpi_03/>}

            {/*{maket_id == 13 && <Gallery/> }*/}



        </div>
    )
}
