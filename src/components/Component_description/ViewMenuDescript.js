import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {$host} from "../../http";

export const ViewMenuDescript =({current_menu})=> {
    const by_menu_id = current_menu.menu_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [menu, setMenu] = useState()

    const getMenu = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`api/menu/${by_menu_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const m = res.data;
                setMenu(m);
            });
        } catch (e){

        }
    }, [token, by_menu_id, request ])

    useEffect( () =>{

        getMenu()
    }, [getMenu])


        return(
           <>
               {!loading && menu &&
                   <div className="col-12 description_part">
                       <p className="lead">{menu.description}</p>
                   </div>
               }

           </>





        )

}
