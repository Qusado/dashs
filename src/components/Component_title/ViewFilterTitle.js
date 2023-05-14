import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";

export const ViewFilterTitle =({current_filter})=> {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()


    return(
        <>
            {!loading && current_filter &&
            <div className="px-4 py-1 text-white">
                <h3>{current_filter.title}</h3>
            </div>
            }
        </>


    )

}
