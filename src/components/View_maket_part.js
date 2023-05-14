import React from "react";
import {MakeLayoutFunction} from "./makeLayoutFunction";
import {KPI_modal} from "./modal_kpi/KPI_modal";
import '../construct.css';
import $ from "jquery";
import {baseUrl} from "./baseRoute";
import {generatePath} from "react-router";

export const View_maket_part = ({form, charts}) =>{

    function createHoverImage() {
        console.log("zdvxb");
        document.querySelectorAll("data-hover-src").forEach((img) => {
            console.log("thfh",img);
            const src = img.getAttribute('src');
            const srcH = img.getAttribute('data-hover-src');
            img.parentElement.parentElement.addEventListener('mouseover', () => {img.src = srcH;})
            img.parentElement.parentElement.addEventListener('mouseout', () => {img.src = src;})
        });
    }



    function ChartBack(background){
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100%";
    }
    function TableBack(background){
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100%";
    }

    function openHoverFil() {
        console.log("vfsdzbshz");
        if(document.getElementById("hoverFilter_c") )
        {
            document.getElementById("hoverFilter_c").style.width = "25%";
            // document.getElementById("hoverFilter_c").style.visibility = "true";

        }
    }
    function closeHoverFil() {
        if(document.getElementById("hoverFilter_c") )
        {
            document.getElementById("hoverFilter_c").style.width = "0%";
            // document.getElementById("hoverFilter_c").style.visibility  = 'false';

        }

    }
    function openHoverFilR() {
        console.log("vfsdzbshz");
        if(document.getElementById("hoverFilter_r") )
        {
            document.getElementById("hoverFilter_r").style.width = "25%";
            // document.getElementById("hoverFilter_c").style.visibility = "true";

        }
    }
    function closeHoverFilR() {
        if(document.getElementById("hoverFilter_r") )
        {
            document.getElementById("hoverFilter_r").style.width = "0%";
            // document.getElementById("hoverFilter_c").style.visibility  = 'false';

        }

    }

    function openMenu() {
        if(document.getElementById("hoverMenu") )
        {
            document.getElementById("hoverMenu").style.width = "15%";
            // document.getElementById("hoverFilter_c").style.visibility = "true";

        }
    }
    function closeMenu() {
        if(document.getElementById("hoverMenu") )
        {
            document.getElementById("hoverMenu").style.width = "0%";
            // document.getElementById("hoverFilter_c").style.visibility  = 'false';

        }

    }
    function openMenuShort() {
        if(document.getElementById("hoverMenu_short") )
        {
            document.getElementById("hoverMenu_short").style.height = "70%";
            document.getElementById("hoverMenu_short").style.width = "5%";
            // document.getElementById("hoverFilter_c").style.visibility = "true";

        }
    }
    function closeMenuShort() {
        if(document.getElementById("hoverMenu_short") )
        {
            document.getElementById("hoverMenu_short").style.height = "0%";
            document.getElementById("hoverMenu_short").style.width = "0%";


        }

    }


    var code_menu_1_full_screen = '<div class="m_1_fs">\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>';
    var code_filter_1_full_screen = '<div class="f_1_fs h-100 w-100">\
                                        <form class="full_form_c col-12">\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter2</option> </select>\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter6</option> </select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter7</option> </select>\
                                            <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                             <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                        </form>\
                                    </div>';

    var code_filter_1_full_screen_left_side = '<div class="f_1_fs_ls h-100 w-100">\
                                        <form class="full_form_c_ls col-11">\
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

    var code_kpi_1_full_screen = ' <div class="k_1_fs">\
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

    var code_kpi_2_to_short = ' <div class="col-12 px-0">\
                                <div class="row k_2_s">\
                                   <div class="col-md-2 mb-6">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>';
    var code_kpi_3_full_screen = ' <div class="p_card3_full_s">\
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

    var back = '<div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"></div>'

    var code_filter_2_full = '<div class="z-filter2_2">\
                                <form class="row p-1" role="form">\
                                    <div class="col-3"><select class="form-select form-select-sm">\ <option selected>Filter1</option> </select></div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter2</option></select> </div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter3</option></select></div>\
                                    <div class="col-3"> <select class="form-select form-select-sm"><option selected>Filter4</option></select> </div>\
                                </form>\
                          </div>';

    var code_kpi_1_full_plus = ' <div class="p_card_full">\
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

    var code_kpi_1_full = ' <div class="card_full">\
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

    var code_kpi_2_full = ' <div class="row k_2_f px-0 pt-2">\
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
                                </div>';

    var code_kpi_2_full_screen = '<div class="row k_2_f_s">\
                                   <div class="col-md-2 mb-5 px-1">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>';

    var code_fil_3_union_m_1 = '<div class="m_1_fs row mt-2">\
                                    <div class="col-12 align-self-start p-0">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="col-12 align-self-end mb-4 p-0" id="fil">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Filter</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
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

    var code_fil_3_union_m_6 = '<div class="m_6_f_3 row" style="margin-left: 5%">\
                                    <div class="col-12 align-self-start p-0">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="col-12 align-self-end mb-4 p-0" id="fil">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
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
    var code_menu_2 = '<ul class="nav justify-content-center boarder mb-0">\
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

    var code_menu_5 = '<div id="exTab3" class="container mb-0">\
                                <ul class="nav nav-pills mx-0 mt-2">\
                                    <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                    <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                    <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                </ul>\
                            </div>';

    var code_menu_3 = ' <div id="hoverMenu" style="z-index: 9">\
                    <a href="javascript:void(0)" id="closeHoverMenu" class="closebtn">&times;</a>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-1 align-self-center" id="menu">\
                            <img id="logomenu_c" src="images/icons/130.png"/>\
                        </div>';
    var code_menu_4 = '<div id="hoverMenu_short" style="z-index: 9">\
                        <a href="javascript:void(0)" id="closeHoverMenu_short" class="closebtn">&times;</a>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-1 align-self-center h-100 px-3 pt-3" id="menu_short">\
                            <img id="logomenu_c"  src="images/icons/130.png"/>\
                        </div>';

    var code_filter_3_menu_2 =' <div class="col-1 py-0 px-2 filter_button" id="filter_button">\
                                    <img id="logomenu_c" src="images/icons/Configure_l.svg" data-hover-src="images/icons/Configure_w.svg"/>\
                                </div>\
                                <ul class="nav justify-content-center boarder mb-0">\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext active" href="#">Dashboard page 1</a>\
                                    </li>\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext"  href="#">Dashboard page 2</a>\
                                    </li>\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext"  href="#">Dashboard page 3</a>\
                                    </li>\
                                </ul>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
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

    var code_filter_3_menu_5 =' <div class="col-1 py-1 other_filter_button" id="filter_button" onmouseleave="this.children[0].src=\'images/icons/Configure_l.svg\'" onmouseover="this.children[0].src=\'images/icons/Configure_w.svg\'">\
                                    <img id="logomenu_c" style="width: 20px" src="images/icons/Configure_l.svg"/>\
                                </div>\
                                <div id="exTab3" class="container mb-0">\
                                    <ul class="nav nav-pills mx-0 mt-2">\
                                        <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                        <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                        <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                    </ul>\
                                </div>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
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
    var code_filter_3_right = '<div class="col-1 py-1 other_filter_button" id="filter_button">\
                                    <img id="logomenu_c" width="25px" src="images/icons/Configure_l.svg"/>\
                                </div>\
                                <div id="hoverFilter_r" class ="row hoverFilter">\
                                    <a href="javascript:void(0)" id="closeHoverFilR" class="col-2 mx-2 px-0 closeHoverFil">\
                                    </a>\
                                    <form class="second_form col-10">\
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
                                 </div>';

    var code_filter_3 = "";

    var code_filter_1_full_plus = '<div class="full_form d-flex h-100 w-100">\
                                        <form class="col-12 px-2">\
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

    function makeBackground(url){
        let background = document.createElement("img");
        background.src = baseUrl+url;
        background.classList.add('px-0');
        background.style.position = "absolute";
        background.style.top = "0";
        background.style.left = "0";
        background.style.height = "100%";
        background.style.width = "100%";
        background.style.zIndex = "0";
        return background;
    }

    function makeDiv(classlist){
        let div = document.createElement("div");
        classlist.forEach(e => {div.classList.add(e);});
        return div;
    }


    function Make(mm, ff, kk, vv, n) {
        var board = document.getElementById('maket');
        if (board) {
            while (board.firstChild) {
                board.removeChild(board.firstChild);
            }
            board.classList.add('row');
            board.classList.add('position-relative');

            var m = Number(mm);
            var f = Number(ff);
            var k = Number(kk);
            var v = Number(vv);


            var other_place_10 = makeDiv(['col-10', 'p-0', 'row']);
            var other_place_12 = makeDiv(['col-12', 'row', 'p-0', 'm-0']);
            other_place_12.style.height = "87%";
            var other_place_11 = makeDiv(['col-11', 'p-0', 'row', 'm-0']);
            other_place_11.style.height = "100%";

            var for_other_columns = makeDiv(['col-12', 'p-0', 'row', 'm-0']);

            var title = makeDiv(['row']);
            title.style.height = "35px";


            if (m === 1) {
                let menu1 = makeDiv(['col-2', 'h-100']);
                menu1.innerHTML = code_menu_1_full_screen;
                menu1.style.zIndex = "3";
                board.appendChild(menu1);
                board.appendChild(other_place_10);
                other_place_10.style.zIndex = "2";
                if (f === 1)
                {
                    let filter1 = makeDiv(['col-2', 'h-100', 'p-2']);
                    filter1.innerHTML = code_filter_1_full_screen;
                    other_place_10.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'h-100']);
                        kpi1.innerHTML = code_kpi_1_full_screen;
                        kpi1.style.paddingRight = "2.5%";
                        kpi1.style.paddingLeft = "1%";
                        kpi1.style.marginTop = "1%";
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 96.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 84.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_to_short;
                        other_place_10.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 82.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 83.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3', 'h-100', 'p-0']);
                        kpi3.innerHTML = code_kpi_3_full_screen;
                        other_place_10.appendChild(kpi3);
                        other_place_10.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 81.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 95.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
                else if (f === 2)
                {
                    let fil2 = makeDiv(['col-12']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    other_place_10.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "5%";
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 78.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 86.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        other_place_10.style.display = "block";
                        other_place_10.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        var kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "1.5%";
                        kpi3.style.paddingLeft = "4%";
                        other_place_10.appendChild(kpi3);
                        other_place_10.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 79.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 87.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
                else if (f === 3) {
                    let fil3 = makeDiv(['col-2', 'h-100']);
                    fil3.innerHTML = code_fil_3_union_m_1;
                    fil3.style.zIndex = "3";
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("fil").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_screen;
                        kpi1.style.paddingRight = "1.5%";
                        kpi1.style.paddingLeft = "1%";
                        kpi1.style.marginTop = "1%";
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 80.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 88.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        other_place_10.style.display = "block";
                        other_place_10.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 93.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 90.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        var kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_screen;
                        kpi3.style.paddingLeft = "4%";
                        kpi3.style.marginTop = "1%";
                        other_place_10.appendChild(kpi3);
                        other_place_10.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 97.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 98.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
            }
            else if (m === 2 || m === 5) {
                let menux = makeDiv(['col-12', 'row', 'p-0', 'm-0']);
                menux.innerHTML = eval("code_menu_" + m);
                menux.style.zIndex = "3";
                board.appendChild(menux);
                board.appendChild(other_place_12);
                other_place_12.style.zIndex = "2";
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0', 'mt-1']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "6%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 118.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 117.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 119.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 120.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
                else if (f === 2)
                {
                    let fil2 = makeDiv(['col-12']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        kpi2.style.paddingLeft = '2%';
                        kpi2.style.paddingRight = '2%';
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        var kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "1.5%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }

                }
                else if (f === 3)
                {
                    let fil3 = makeDiv(['col-12', 'p-0', 'm-0']);
                    fil3.innerHTML = eval("code_filter_3_menu_" + m);
                    fil3.style.zIndex = "3";
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("filter_button").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingRight = "4%";
                        kpi1.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 80.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 88.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 93.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 90.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "6%";
                        // kpi3.style.paddingRight = "4%";

                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 97.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 98.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }

                }
            }
            else if (m === 3) {
                let menux = makeDiv(['col-12', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_3;
                menux.style.zIndex = "4";
                menux.style.height = '40px';
                board.appendChild(menux);
                board.classList.add('align-items-start');
                board.appendChild(other_place_12);
                document.getElementById("menu").addEventListener("click", openMenu);
                document.getElementById("closeHoverMenu").addEventListener("click", closeMenu);
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0', 'mt-1']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    filter1.style.zIndex = "2";

                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        kpi1.style.zIndex = "2";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 123.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 128.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 119.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 120.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
                else if (f === 2) {
                    let fil2 = makeDiv(['col-12']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    fil2.style.zIndex = "2";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        kpi2.style.paddingLeft = '2%';
                        kpi2.style.paddingRight = '2%';
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        var kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "1.5%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }

                }
                else if (f === 3) {
                    menux.classList.remove('col-12');
                    menux.classList.add('col-6');
                    let fil3 = makeDiv(['m-0', 'col-6']);
                    fil3.innerHTML = code_filter_3_right;
                    board.insertBefore(fil3, other_place_12);
                    document.getElementById("filter_button").addEventListener("click", openHoverFilR);
                    document.getElementById("closeHoverFilR").addEventListener("click", closeHoverFilR);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0.5%";
                        kpi1.style.paddingRight = "6.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        kpi2.style.paddingLeft = '2%';
                        kpi2.style.paddingRight = '2%';
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3)
                    {
                        var kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "2%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }


            }
            else if(m===4)
            {
                let menux = makeDiv(['col-12', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_4;
                menux.style.zIndex = "4";
                menux.style.height = '40px';
                board.appendChild(menux);
                board.classList.add('align-items-start');
                board.appendChild(other_place_12);
                document.getElementById("menu_short").addEventListener("click", openMenuShort);
                document.getElementById("closeHoverMenu_short").addEventListener("click", closeMenuShort);
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0', 'mt-1']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    filter1.style.zIndex = "2";

                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        kpi1.style.zIndex = "2";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 123.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 128.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 119.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 120.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }
                else if (f === 2) {
                    let fil2 = makeDiv(['col-12']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    fil2.style.zIndex = "2";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        kpi2.style.paddingLeft = '2%';
                        kpi2.style.paddingRight = '2%';
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3) {
                        var kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "1.5%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }

                }
                else if (f === 3) {
                    menux.classList.remove('col-12');
                    menux.classList.add('col-6');
                    let fil3 = makeDiv(['m-0', 'col-6']);
                    fil3.innerHTML = code_filter_3_right;
                    board.insertBefore(fil3, other_place_12);
                    document.getElementById("filter_button").addEventListener("click", openHoverFilR);
                    document.getElementById("closeHoverFilR").addEventListener("click", closeHoverFilR);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0.5%";
                        kpi1.style.paddingRight = "6.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        kpi2.style.paddingLeft = '2%';
                        kpi2.style.paddingRight = '2%';
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame .png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    } else if (k === 3)
                    {
                        var kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "2%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                }


            }
            else if (m === 6) {
                let menu6 = makeDiv(['col-1', 'p-0', 'm-0']);
                menu6.innerHTML = code_menu_6;
                menu6.style.zIndex = "3";
                board.appendChild(menu6);
                board.appendChild(other_place_11);
                other_place_11.style.zIndex = "2";
                other_place_11.appendChild(title);
                other_place_11.appendChild(for_other_columns);
                for_other_columns.style.zIndex = '2';
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    filter1.style.height = "95%";
                    //for_other_columns.style.display = "block";
                    for_other_columns.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        for_other_columns.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 53.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 54.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-10', 'px-4']);
                        kpi2.innerHTML = code_kpi_2_to_short;
                        for_other_columns.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 58.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 59.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "1%";
                        kpi3.style.paddingRight = "4%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 61.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 63.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    }
                } else if (f === 2) {
                    let fil2 = makeDiv(['col-12', 'p-0', 'mx-0', 'mt-2']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    for_other_columns.appendChild(fil2);
                    other_place_11.style.display = "block";
                    //for_other_columns.style.display = "block";
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-2']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0";
                        kpi1.style.paddingRight = "5.5%";
                        for_other_columns.appendChild(kpi1);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 55.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 56.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        for_other_columns.appendChild(kpi2);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 65.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 64.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3', 'mt-2']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingLeft = "5%";
                        kpi3.style.paddingRight = "0.5%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 66.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 67.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    }
                } else if (f === 3) {
                    let fil3 = makeDiv(['col-1', 'p-0', 'm-0']);
                    fil3.innerHTML = code_fil_3_union_m_6;
                    fil3.style.zIndex = '3';
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("fil").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-2']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0";
                        kpi1.style.paddingRight = "5.5%";
                        for_other_columns.appendChild(kpi1);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 68.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 69.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-12', 'mt-2']);
                        kpi2.innerHTML = code_kpi_2_full;
                        for_other_columns.appendChild(kpi2);
                        other_place_11.style.display = 'block';
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 72.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 73.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }
                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "5%";
                        kpi3.style.paddingRight = "0.5%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 74.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 75.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            // var v3 = document.createElement("div");
                            // v3.classList.add('position-relative');
                            // v3.innerHTML = code_v_3;
                            // other_place_10.insertBefore(v3, other_place_10.firstChild);
                            // document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                            // document.getElementById("maket").style.backgroundSize = "100%";
                            // document.getElementById("chart").addEventListener("click", ChartBack("url('../backs/Frame 96.png')"));
                            // document.getElementById("table").addEventListener("click", TableBack("url('../backs/Frame 84.png')"));

                        }

                    }
                }
            }
        }

    }



    function Generate()
    {
        var arr = [];
        var menu = [1,2,3,4,5,6];
        var filter = [1,];
        var kpi = [1,];
        var visual = [1];
        for (let i = 0; i < menu.length; i++) {
            for (let k = 0; k < filter.length; k++){
                for (let m = 0; m < kpi.length; m++) {
                    for (let n = 0; n < visual.length; n++){
                        arr.push([menu[i], filter[k], kpi[m], visual[n]]);
                    }
                }
            }
        }
        //console.log(arr);
        //return arr;
        // for(let a = 0; a <arr.length; a++ ){
        //     if(a <= 10){
        //        // lol(arr[a][0], arr[a][1], arr[a][2], arr[a][3], a);
        //     }
        //
        // }
        Make(1, 1, 1, 3, 1);

    }


    $(document).ready(
        function (){
            Generate();
            // if(form) {
            //     Make(form.menu_id, form.filter_id, form.kpi_id, form.visual_id);
            // }
        })


    return (
        <>
            <fieldset style={{backgroundColor: 'white'}} className="generate">
                <div className="row container-fluid w-100 p-0 m-0">
                    <div className="col-12 mt-4">
                        <div className="row justify-content-center">
                            <div className="col-8" style={{marginRight:'20px'}}>
                                <div className="maket" id="maket">

                                </div>
                            </div>
                            <div className="col-3">
                                <form>
                                    <h5 className="pt-0 pb-2">Комментарии к отчету</h5>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control form-control-sm" id="floatingInput"/>
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Заказчик</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Проектный менеджер</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Исполнитель</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Компания</label>
                                    </div>
                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" />
                                        <label htmlFor="floatingInput">Прогнозируемая цена</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
