window.onload = () => {
    setTimeout(function () {

        const liquid_search_input_lg = document.getElementById("cx_1630815321671_search_input_lg");
        const cx_1630815321671_search_input_md_sm = document.getElementById("cx_1630815321671_search_input_md_sm");
        liquid_search_input_lg?.removeAttribute("placeholder");
        cx_1630815321671_search_input_md_sm?.removeAttribute("placeholder");

        timeout_var = null;

        function typeWriter(selector_target, text_list, placeholder = false, i = 0, text_list_i = 0, delay_ms = 110) {
            if (!i) {
                if (placeholder) {
                    document.querySelector(selector_target).placeholder = "";
                }
                else {
                    document.querySelector(selector_target).innerHTML = "";
                }
            };
            txt = text_list[text_list_i];
            if (i < txt.length) {
                if (placeholder) {
                    document.querySelector(selector_target).placeholder += txt.charAt(i);
                }
                else {
                    document.querySelector(selector_target).innerHTML += txt.charAt(i);
                }
                i++;
                setTimeout(typeWriter, delay_ms, selector_target, text_list, placeholder, i, text_list_i);
            }
            else {
                text_list_i++;
                if (typeof text_list[text_list_i] === "undefined") {
                    setTimeout(typeWriter, (delay_ms * 5), selector_target, text_list, placeholder);
                }
                else {
                    i = 0;
                    setTimeout(typeWriter, (delay_ms * 3), selector_target, text_list, placeholder, i, text_list_i);
                }
            }
        };

        text_list = [
            "Search By Products Name",
            "Example 1 : Mixed Honey Nuts",
            "Example 2 : চিনিগুড়া চাল ",
            "Example 3 : চাকের মধু"
        ];

        typeWriter("#cx_1630815321671_search_input_lg", text_list, true);
        typeWriter("#cx_1630815321671_search_input_md_sm", text_list, true);

        // header customize menu
        const cx_1630815321671_header_content_wrapper = document.querySelector(".cx_1630815321671_header_body");
        const topMenuBarWrapper = elementMaker("div", ["topMenuBarWrapper"]);
        cx_1630815321671_header_content_wrapper.prepend(topMenuBarWrapper);
        const menuList_wrapper = elementMaker("ul", ["menuList_wrapper"]);
        topMenuBarWrapper.appendChild(menuList_wrapper);
        const menuList1 = elementMaker("li", ["menuList"], "menuList1_id");
        menuList1.textContent = `Delivery Charge Info `;
        const menuList2 = elementMaker("li", ["menuList"], "menuList2_id");
        menuList2.textContent = `How to Order`;
        const menuList3 = elementMaker("li", ["menuList"], "menuList3_id");
        menuList3.textContent = `FAQ`;
        menuList_wrapper.appendChild(menuList1);
        menuList_wrapper.appendChild(menuList2);
        menuList_wrapper.appendChild(menuList3);

        const body_container = document.querySelector(".body_container");
        const deliveryInfoWrapper = elementMaker("div", ["deliveryInfoWrapper"], "deliveryInfoWrapper_id");
        body_container.appendChild(deliveryInfoWrapper);

        const infoImg_container = elementMaker("div", ["infoImg_container"], "infoImg_container_id");
        deliveryInfoWrapper.appendChild(infoImg_container);

        const delivary_info_image = elementMaker("img", ["delivary_info_image"], "delivary_info_image_id");
        delivary_info_image.setAttribute("src", `https://i.ibb.co/jhg84SQ/DELIVERY-CHARGE-CHART.jpg`);
        infoImg_container.appendChild(delivary_info_image);

        const closeDeliveryPopup = elementMaker("span", ["closeDeliveryPopup"], "closeDeliveryPopup_id");
        closeDeliveryPopup.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
  <path id="cross_2_" data-name="cross (2)" d="M11.939.995,10.883-.061,5.939,4.884.995-.061-.061.995,4.884,5.939-.061,10.883.995,11.939,5.939,6.994l4.944,4.945,1.056-1.056L6.994,5.939Z" transform="translate(0.061 0.061)" fill="#fff"/>
</svg>

        `;
        const closeOrderVideoPopup = elementMaker("span", ["closeDeliveryPopup"], "closeDeliveryPopup_id");
        closeOrderVideoPopup.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
  <path id="cross_2_" data-name="cross (2)" d="M11.939.995,10.883-.061,5.939,4.884.995-.061-.061.995,4.884,5.939-.061,10.883.995,11.939,5.939,6.994l4.944,4.945,1.056-1.056L6.994,5.939Z" transform="translate(0.061 0.061)" fill="#fff"/>
</svg>

        `;
        infoImg_container.appendChild(closeDeliveryPopup);


        const orderVideoWrapper = elementMaker("div", ["deliveryInfoWrapper"], "orderVideoWrapper_id");
        body_container.appendChild(orderVideoWrapper);
        const orderVideoContainer = elementMaker("div", ["infoImg_container"], "orderVideoContainer_id");
        orderVideoContainer.innerHTML = `
        <iframe class="iframe_style" height="340" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        `;
        orderVideoContainer.appendChild(closeOrderVideoPopup);

        // close popup
        closeDeliveryPopup.addEventListener("click", function () {
            document.getElementById("deliveryInfoWrapper_id").classList.remove("active_delivery_info");
        });
        closeOrderVideoPopup.addEventListener("click" , function(){
            document.getElementById("orderVideoWrapper_id").classList.remove("active_delivery_info");
            orderVideoWrapper.removeChild(orderVideoContainer);
        });

        // menu button interaction
        menuList1.addEventListener("click", function () {
            document.getElementById("deliveryInfoWrapper_id").classList.add("active_delivery_info");
        });
        menuList2.addEventListener("click", function () {
            document.getElementById("orderVideoWrapper_id").classList.add("active_delivery_info");
            orderVideoWrapper.appendChild(orderVideoContainer);
        });

        // remove faq menu
        const cx_1630815321671_menu_wrapper  = document.querySelectorAll(".cx_1630815321671_main_nav_item ");
        cx_1630815321671_menu_wrapper?.forEach(element=>{
            if(element?.getAttribute("data-path") === "/page/faq"){
                element.remove();
            };
        });
        menuList3.addEventListener("click" , function(){
            typeof handleNavigate == "function" && handleNavigate("/page/faq");
        });





        // buy now button on item page
        let myEventfunction = () => {
            setTimeout(() => {
                const cx_1632983997891_product_details_quantity_content_wrap = document.querySelector(".cx_1632983997891_product_details_quantity_content_wrap");
                const buy_now_button_wrapper = elementMaker("div", ["buy_now_button_wrapper"]);
                const buy_now_button = elementMaker("button", ["buy_now_button"]);
                buy_now_button.textContent = `Buy Now`;
                buy_now_button_wrapper.appendChild(buy_now_button);
                let childNodesLength = cx_1632983997891_product_details_quantity_content_wrap?.childNodes?.length;
                if (childNodesLength == 3) {
                    cx_1632983997891_product_details_quantity_content_wrap.appendChild(buy_now_button_wrapper);
                }

                buy_now_button_wrapper.addEventListener("click", async function () {
                    document.getElementById("cx_1632983997891_add_to_cart").click();

                    setTimeout(() => {
                        typeof handleNavigate == "function" && handleNavigate("/cart");
                    }, 500);

                });

            }, 1200);
        };

        // link change watcher
        let previousHistory = '';
        setInterval(() => {
            if (window.location.href !== previousHistory) {
                previousHistory = window.location.href;
                myEventfunction();
            }
        }, 100);


        // remove sub catagoriy img
        window.addEventListener("click", function () {
            const CatagoriesLocation = window.location.href;
            let checkCatagories = CatagoriesLocation.includes("/category");
            if (checkCatagories) {
                setTimeout(function () {
                    const s020C_bread_crumb_product_image_wrapper = document.querySelector(".s020C_bread_crumb_product_image_wrapper");
                    const s020C_bread_crumb_product_image_id = document.getElementById("s020C_bread_crumb_product_image_id");
                    s020C_bread_crumb_product_image_wrapper.removeChild(s020C_bread_crumb_product_image_id);

                    // sub catagories gap remove 
                    const s020C_all_sub_category_inner_items_id = document.getElementById("s020C_all_sub_category_inner_items_id");
                    const s020C_all_sub_category_item_section_id = document.getElementById("s020C_all_sub_category_item_section_id");
                    const lengthGet = s020C_all_sub_category_inner_items_id.children.length;
                    if (lengthGet == 0) {
                        s020C_all_sub_category_item_section_id.style.padding = `unset`;
                    }
                }, 1300);
            };
        });



        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };
    }, 1350);
}