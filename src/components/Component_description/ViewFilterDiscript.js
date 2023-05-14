import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {$host} from "../../http";

export const ViewFilterDiscript =({ current_filter})=> {

    const by_filter_id = current_filter.filter_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [filter, setFilter] = useState()


    const getFilter = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`api/filter/${by_filter_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const f = res.data;
                setFilter(f);
            });
        } catch (e){

        }
    }, [token, by_filter_id, request ])

    useEffect( () =>{
        getFilter()
    }, [getFilter])

        return(
            <>
                {!loading && filter &&
                <div className="col-12 description_part">
                    <p className="lead">{filter.description}</p>
                </div>
                }
            </>


        )

}
