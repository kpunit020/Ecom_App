import router from '@system.router';
import productsData from '../../common/productsData.js';  // all the products
import cartProducts from '../../common/cartProducts.js';  // products in the cart
import prompt from '@system.prompt';

export default {
    data: {
        productsData : productsData,

        // object for storing selected parameters
        param_value : {
            size : 6,
            color : 'red',
            qty : 1,
        },

        dummy_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        backArrowIcon_src : 'common/details_page_icons/back_arrow_icon.png',
        twoDotIcon_src : 'common/details_page_icons/two_dot_icon.png',
        plus_Icon_src : 'common/details_page_icons/plus_icon.png',
        minus_Icon_src : 'common/details_page_icons/minus_icon.png',
        favourite_Icon_src : 'common/details_page_icons/favourite_icon.png',
        cartIcon_src : 'common/images/cart_icon.png',
    },
    onInit() {
        this.productsData = productsData;
        this.size_data = [
            {
                value : 6,
                bg_color : "blue",
                txt_color : "white",
            },
            {
                value : 7,
                bg_color : "#f3f3f3",
                txt_color : "black",
            },
            {
                value : 8,
                bg_color : "#f3f3f3",
                txt_color : "black",
            },
            {
                value : 9,
                bg_color : "#f3f3f3",
                txt_color : "black",
            },
        ];

        this.color_data = [
            {
                color : 'red',
                value : "O",
            },
            {
                color : 'blue',
                value : "",
            },
            {
                color : 'black',
                value : "",
            },
        ];

        this.selected_product = {};

        productsData.data.forEach(
            (item) => {
                if(item.isSelected){
                    this.selected_product = {...item};
                    return;
                }
            }
        );
    },
    redir_home: function(){
        router.back();
    },
    inc_count : function(){
        this.param_value.qty += 1;
    },
    dec_count : function() {
        if (this.param_value.qty > 1)
        this.param_value.qty -= 1;
    },
    update_size: function(event) {
        var selected_size = event.target.attr.value.substr(0,1);

        this.size_data.forEach(
            function(item){
                item.bg_color = "#f3f3f3";
                item.txt_color = "black";

                if(item.value == selected_size){
                    item.bg_color = "blue";
                    item.txt_color = "white";
                }
            }
        );

        this.param_value.size = selected_size;
    },
    update_color : function(e) {
        var selected_color = e.target.id;

        this.color_data.forEach(
            (item) => {
                item.value = "";

                if(item.color == selected_color){
                    item.value = "O";

                }
            }
        );
    },
    addToCart : function() {
        for (let param_valueKey in this.param_value) {
            this.selected_product[param_valueKey] = this.param_value[param_valueKey];
        }
        cartProducts.data.push(this.selected_product);
        prompt.showToast({
            message: "Added to Cart",
        });
    }
}
