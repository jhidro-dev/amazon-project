export const cart = [
    {
        productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
        quantity: 1
    },
    {
        productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity: 1
    },
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    }
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