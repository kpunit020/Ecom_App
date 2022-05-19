import router from '@system.router';
import categoryData from '../../../common/categoriesData.js';
import productsData from '../../../common/productsData.js';
import filteredProducts from '../../../common/filteredProducts.js';
import filterPageData  from '../../filter/filter.js';

var homeTabData = {
    data: {
        categoryData : categoryData,
        productsData : filteredProducts,

        selected_category : "Shoes",

        navigationBarIcon_src : 'common/images/navigation_bar_icon.png',
        profileIcon_src : 'common/images/profile_icon.png',

        filterIcon_src : 'common/images/filter_icon.png',

        shoe1_src : 'common/shoes_images/shoe1.png',
    },
    onInit() {
        this.categoryData = categoryData;
        this.productsData = filteredProducts;
        this.selected_category = filterPageData.data.filter_param.category;
    },
    goto_details_page: function(e) {
        var selected_id = e.target.id;

        productsData.data.forEach(
            function(item) {
                item.isSelected = false;

                if(item.id == selected_id){
                    item.isSelected = true;
                }
            }
        );

        router.push({
            uri: 'pages/productDetails/productDetails',
        });
    },

    goto_filter_page: function () {
        router.push({
            uri: 'pages/filter/filter',
        });
        this.onInit();
    },
    change_category: function(event){
        var selected_El_id = event.target.id;

        this.categoryData.data.forEach(
            (item) => {
                item.bgColor = '#f3f3f3';
                item.txtColor = 'black';

                if(item.id == selected_El_id){
                    item.bgColor = 'blue';
                    item.txtColor = 'white';
                    this.selected_category = item.name;
                }
            }
        );
    },
}

export default homeTabData;

