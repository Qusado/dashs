import React, {useContext} from 'react'
import {Link} from "react-router-dom";


export const ThirdMainBlock = () => {

    var code_menu_6 = ' <div class="d-flex flex-column bd-highlight nav1">\
                                <div class="nav-item hovervariant py-3 mt-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                            </div>';
    var code_menu_1 = '<div class="d-flex flex-column bd-highlight nav2">\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>';
    var code_union_menu_1_f3 =' <div class="bd-highlight nav2">\
                                        <div id="menu">\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                        <div id="fil">\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Filter</a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div id="hoverFilter" class="row hoverFilter">\
                                        <form class="second_form col-11">\
                                            <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                            <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                            <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                        </form>\
                                        <a href="javascript:void(0)" id="closeHoverFil" class="col-1 px-0 closeHoverFil">\
                                        </a>\
                                    </div>';


    var code_menu_2 = '<ul class="nav justify-content-center boarder">\
                            <li class="nav-item">\
                                <a class="nav-link titletext active" href="#">Dashboard page 1</a>\
                            </li>\
                            <li class="nav-item">\
                                <a class="nav-link titletext"  href="#">Dashboard page 2</a>\
                            </li>\
                            <li class="nav-item">\
                                <a class="nav-link titletext"  href="#">Dashboard page 3</a>\
                            </li>\
                        </ul>';

    var code_menu_5 = '<div id="exTab3" class="container">\
                                <ul class="nav nav-pills mx-0 mb-3">\
                                    <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                    <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                    <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                </ul>\
                            </div>';


    // var code_menu_6 = '<div id="mySidenav2" class="sidenav2 shadow">\
    //                     <a href="javascript:void(0)" class="d-flex justify-content-center closebtn2" onclick={closeNav2}>&times;</a>\
    //                     <div class=" d-flex flex-column bd-highlight">\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo1" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo2" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo3" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false">\
    //                                 <div class="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false"> <div class="logo5" style={{width:"2.5em", height:"2.5em"}}></div> </a>\
    //                         </div>\
    //                     </div>\
    //                 </div>\
    //                     <div class="col-12 pl-0">\
    //                     <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav2} className="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
    //                         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
    //                     </svg>\
    //                 </div>';
    //
    // var code_menu_5 = '<div id="mySidenav" class="sidenav shadow">\
    //        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>\
    //         <ul class="nav nav-pills flex-column mb-auto for_ham">\
    //             <li class="nav-item"> <a href="#" class="nav-link"> Dashboard page 1 </a> </li>\
    //             <li> <a href="#" class="nav-link"> Dashboard page 2 </a> </li>\
    //             <li> <a href="#" class="nav-link"> Dashboard page 3</a> </li>\
    //             <li> <a href="#" class="nav-link">   Dashboard page 4 </a> </li>\
    //             <li> <a href="#" class="nav-link">   Dashboard page 5 </a></li>\
    //         </ul>\
    //         </div>\
    //                     <div class="col-12 pl-0">\
    //             <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav()} class="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
    //                 <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
    //             </svg>\
    //         </div>';
    var code_menu_3 = '<div>\
                                    <img id="logomenu" src="images/icons/130.png"/>\
                                </div>';
    var code_menu_4 = '<div>\
                                    <img id="logomenu" src="images/icons/130.png"/>\
                                </div>';
    //menu

    //filter
    var code_fil_1 = '<div class="d-flex z-filter h-100 w-100">\
                                <form class="first_form col-12">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter2</option> </select>\
                                    <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter6</option> </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter7</option> </select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter9</option> </select>\
                       </form>\
                            </div>';
    var code_fil_1_full = '<div class="d-flex h-100 w-100">\
                                <form class="full_form col-12">\
                                    <select class="form-select form-select-sm mb-2"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm mb-2"> <option selected>Filter2</option> </select>\
                                    <select class="form-select form-select-sm mb-2"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm mb-2"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm mb-2"> <option selected>Filter6</option> </select>\
                                    <select class="form-select form-select-sm mb-2"> <option selected>Filter7</option> </select>\
                                    <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                                     <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                       </form>\
                            </div>';
    var code_fil_2 = '<div class="z-filter2_2">\
                                <form class="row p-1" role="form">\
                                    <div class="col-3"><select class="form-select form-select-sm">\ <option selected>Filter1</option> </select></div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter2</option></select> </div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter3</option></select></div>\
                                    <div class="col-3"> <select class="form-select form-select-sm"><option selected>Filter4</option></select> </div>\
                                </form>\
                          </div>';
    var code_fil_3 ='<div id="SideFilt" class="row SideFilt">\
                            <form class="second_form col-11">\
                                <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                <select class="form-select form-select-sm"> <option selected>Filter2</option></select>\
                                <select class="form-select form-select-sm"> <option selected>Filter3</option></select>\
                                <select class="form-select form-select-sm"> <option selected>Filter4</option></select>\
                                <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                    <option selected>Filter5</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                               </select>\
                                <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                    <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                </select>\
                                <select class="form-select form-select-sm"><option selected>Filter8</option> </select>\
                            </form>\
                            <a href="javascript:void(0)" class="col-1 px-0 closebtnf" id="closeFil"/>\
                        </div>\
                            <div class="d-flex flex-column pt-4 bd-highlight nav3">\
                                <div class="nav-item hovervariant py-4" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                                <div id="icon_filter3">\
                                    <div class="nav-item hovervariant py-2" id="hovervariant">\
                                        <div class="d-flex align-items-center justify-content-center px-2">\
                                            <img id="imgm" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>';
    var code_only_fil_3 = '<div id="Float_fil_button">\
                                <img class="m-1 shadow-0" src="images/icons/Configure_l.svg"/>\
                            </div>';

    var code_only_panel_fil_3 = '<div id="FloatFilter" class="row FloatFilter">\
                                <form class="second_form col-11">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm">\
                                        <option selected>Filter6</option>\
                                    </select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm">\<option selected>Filter8</option>\</select>\
                                </form>\
                                <a href="javascript:void(0)" class="col-1 px-0 closebtnf" id="closefloatFil"/>\
                            </div>';
    //filter

    //kpi
    var code_kpi_4 = ' <div class="p_card">\
                  <div class="card">\
                      <div class="text-center mb-0 title_kpi">Title1</div>\
                      <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                      <div class="text-center green_kpi"> &#8679; +15%</div>\
                   </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                     <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                     </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                   <div class="card">\
                     <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                   <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                  </div>';

    var code_kpi_4_full = ' <div class="p_card_full">\
                  <div class="card">\
                      <div class="text-center mb-0 title_kpi">Title1</div>\
                      <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                      <div class="text-center green_kpi"> &#8679; +15%</div>\
                   </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                     <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                     </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                   <div class="card">\
                     <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                   <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                  </div>';
    var code_kpi_4_full_screen = ' <div class="p_card_full_s">\
                  <div class="card">\
                      <div class="text-center mb-0 title_kpi">Title1</div>\
                      <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                      <div class="text-center green_kpi"> &#8679; +15%</div>\
                   </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                     <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                     </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                   <div class="card">\
                     <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                   <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                  </div>';
    var code_kpi_5 = '<div>\
                            <div class="col-12 px-0" id="style_id_kpi5">\
                                <div class="row p_card2">\
                                   <div class="col-md-2 mb-6">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
    var code_kpi_6 = ' <div class="p_card3">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi3">7854 млн</div>\
                                            <div class="text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                           <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                           <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                 </div>';

    var code_kpi_6_full = ' <div class="p_card3_full">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi3">7854 млн</div>\
                                            <div class="text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                           <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                           <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                 </div>';
    var code_kpi_6_full_screen = ' <div class="p_card3_full_s">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi3">7854 млн</div>\
                                            <div class="text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                           <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                           <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                 </div>';
    //kpi

    //visual

    var code_v_3 = '<div class="box_v1">\
                            <div class="row justify-content-end">\
                                <div class="col-4 pt-2 check_button">\
                                    <input type="radio"\
                                            class="" name="check_button" id="chart"/>\
                                    <label class="shadow-3" id="charts" htmlFor="chart">Таблицы</label>\
                                    <input type="radio"\
                                            class="" name="check_button" id="table"/>\
                                    <label class="shadow-3" id="tables" htmlFor="table">Графики</label>\
                                </div>\
                            </div>\
                        </div>';

















    return (
        <div className="three d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
                <Link to="/desk">
                    <button type="button" className="btn btn-lg btn-primary bigbut">
                        Создать свой дашборд
                    </button>
                </Link>
            </div>
        </div>

    )}
