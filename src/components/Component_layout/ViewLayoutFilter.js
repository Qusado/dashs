import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Filter_01} from "../filter/filter_0.1";
import {Filter_02} from "../filter/filter_0.2";
import {Filter_03} from "../filter/filter_0.3";

export const ViewLayoutFilter =({current_filter})=> {
    const filter_id = current_filter.filter_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()


    return(
        <div>
            {filter_id==1 && <Filter_01/>}
            {filter_id==2 && <Filter_02/>}
            {filter_id==3 && <Filter_03/>}
        </div>
    );
}
