function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }

    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                //updates totalCost
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":
            //identify product by name and remove it from cart
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                //updates total cost
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}

export default cartReducer;