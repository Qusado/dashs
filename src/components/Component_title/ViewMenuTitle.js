import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";

export const ViewMenuTitle =({current_menu})=> {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()


    return(
        <>
            {!loading && current_menu &&
            <div className="px-4 py-1 text-white">
                <h3>{current_menu.title}</h3>
            </div>
            }
        </>


    )

}
