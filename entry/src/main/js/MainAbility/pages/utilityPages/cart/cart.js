import cartProducts from '../../../common/cartProducts'

export default {
    data: {
        cartProducts : cartProducts.data,
    },
    onInit() {
        this.cartProducts = cartProducts.data;
    },
    buyNow : function () {
        cartProducts.data = [];
        this.onInit();

    }
}
