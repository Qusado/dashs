import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/Auth.Context";
import {Fields_2} from "../components/Fields_2";

export const Constructor = () =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()

    return(
        <>
            <Fields_2>
            </Fields_2>
        </>

    )
}
