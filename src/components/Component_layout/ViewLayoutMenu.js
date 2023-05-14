import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {Menu_01} from "../menu/menu_0.1";
import {Menu_02} from "../menu/menu_0.2";
import {Menu_03} from "../menu/menu_0.3";
import {Menu_04} from "../menu/menu_0.4";
import {Menu_05} from "../menu/menu_0.5";
import {Menu_06} from "../menu/menu_0.6";
import {useHttp} from "../../hooks/http.hook";

export const ViewLayoutMenu =({current_menu})=> {
    const menu_id = current_menu.menu_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    return(
        <div>
            {menu_id==2 && <Menu_01/>}
            {menu_id==3 && <Menu_02/>}
            {menu_id==4 && <Menu_03/>}
            {menu_id==5 && <Menu_04/>}
            {menu_id==6 && <Menu_05/>}
            {menu_id==7 && <Menu_06/>}
        </div>
    );
}
