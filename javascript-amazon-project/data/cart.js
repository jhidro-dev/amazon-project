export const cart = [

];
export function addToCart (productId) {
        let matchingIterm;
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingIterm = cartItem;
            }
        });

        if (matchingIterm) {
            matchingIterm.quantity += 1;
        }else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
    }