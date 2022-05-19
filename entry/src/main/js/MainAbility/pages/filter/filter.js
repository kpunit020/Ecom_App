import router from '@system.router';
import categoryData from '../../common/categoriesData.js';
import filteredProducts from '../../common/filteredProducts.js';  // products after filtering
import productsData from '../../common/productsData.js';  // all the products
import homeTabData  from '../utilityPages/homeTab/homeTab';

var filterPageData =  {
    data: {

        // object for storing filtering parameters
        filter_param : {
            gender : 'Male',
            category : 'Shoes',
            brand : 'Puma',
            min_price : 1000,
            max_price : 20000,
            size : 6,
        },

        backArrowIcon_src : 'common/details_page_icons/back_arrow_icon.png',
        twoDotIcon_src : 'common/details_page_icons/two_dot_icon.png',
    },
    onInit() {
        this.brand_names = ['Puma', 'Nike', 'Adidas', 'Campus'];
        this.categoryData = categoryData;
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
        this.gender_btns = [
            {
                value : "Male",
                bg_color : "blue",
                txt_color : "white",
            },
            {
                value : "Female",
                bg_color : "#f3f3f3",
                txt_color : "black",
            },
            {
                value : "Both",
                bg_color : "#f3f3f3",
                txt_color : "black",
            },
        ];
    },
    redir_home: function(){
        router.back();
    },
    set_min_value: function(e) {
        if (e.mode == "start") {
            this.filter_param.min_price = e.value;
        } else if (e.mode == "move") {
            this.filter_param.min_price = e.value;
        } else if (e.mode == "end") {
            this.filter_param.min_price = e.value;
        }
    },
    set_max_value: function(e) {
        if (e.mode == "start") {
            this.filter_param.max_price = e.value;
        } else if (e.mode == "move") {
            this.filter_param.max_price = e.value;
        } else if (e.mode == "end") {
            this.filter_param.max_price = e.value;
        }
    },
    update_gen: function(event) {
        var selected_gender = event.target.attr.value;

        this.gender_btns.forEach(
            function(item){
                item.bg_color = "#f3f3f3";
                item.txt_color = "black";

                if(item.value == selected_gender){
                    item.bg_color = "blue";
                    item.txt_color = "white";
                }
            }
        );

        this.filter_param.gender = selected_gender;
    },
    update_category : function(e){
        this.filter_param.category = e.newValue;
    },
    update_brand : function(e){
        this.filter_param.brand = e.newValue;
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

        this.filter_param.size = selected_size;
    },
    reset : function() {
        filteredProducts.data = productsData.data;
        router.push(
            {
                uri: 'pages/index/index',
            }
        );
    },
    apply: function () {
        // filtering logic
        filteredProducts.data = productsData.data.filter(
            (item) => {
                var is_selected = true;

                if(item.gender != undefined && item.gender != this.filter_param.gender) is_selected = false;
                if(item.category != undefined && item.category != this.filter_param.category) is_selected = false;
                if(item.brand != undefined && item.brand != this.filter_param.brand) is_selected = false;
                if(item.size != undefined && item.size != this.filter_param.size) is_selected = false;
                if(item.price != undefined && (item.price < this.filter_param.min_price || item.price > this.filter_param.max_price)) is_selected = false;

                return is_selected;
            }
        );

        console.log(filteredProducts.data.length);
        this.redir_home();
    }
}

export default filterPageData;