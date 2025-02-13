//import { deliveryOptions } from "./deliveryOptions";

export let cart;
loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [
        {
        productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
        quantity: 1,
        deliveryOptionId: '2'
        },
        {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '2'
        }
    ];
};
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        saveToStorage();
    };
    export function removeFromCart (productId) {
        const newCart = [];

        cart.forEach((cartItem) => {
            if(cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        cart = newCart;

        saveToStorage();
    }

    export function updateDeliveryOption(productId, deliveryOptionId) {
        let matchingIterm;
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingIterm = cartItem;
            }
        });
        
        matchingIterm.deliveryOptionId = deliveryOptionId;
        saveToStorage();
        
    }