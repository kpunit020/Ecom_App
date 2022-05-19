import tabData from '../../common/tabData.js';

export default {
    data: {
        tabData : tabData,
    },
    onInit() {

    },
    change_tab_view: function(e){
        this.$element('HomeContainer').setStyle("display","none");
        this.$element('CategoriesContainer').setStyle("display","none");
        this.$element('NotificationsContainer').setStyle("display","none");
        this.$element('CartContainer').setStyle("display","none");

        var invoked_El_id = e.target.attr.value + "Container";

        this.$element(invoked_El_id).setStyle("display", "flex");

        this.tabData.tab_details.forEach(
            (item) => {
                item.opacity = 0.4;

                if(item.id == e.target.id){
                    item.opacity = 1;
                }
            }
        );
        //console.log(e.target.id);
    },
}

