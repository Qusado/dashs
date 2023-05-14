import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Visual_01} from "../visual/v_0.1";
import {baseUrl} from "../baseRoute";

export const ViewLayoutVisual =({current_visual})=> {
    const visual_id = current_visual.visual_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    return(
        <div>
            {visual_id==1 && <img style={{width: '100%', height:'auto'}} src={baseUrl+'/mini/13.png'}/>}
            {visual_id==2 && <img style={{width: '100%', height:'auto'}} src={baseUrl+'/mini/14.png'}/>}
            {visual_id==3 && <Visual_01/>}

        </div>
    );
}
