//import { deliveryOptions } from "./deliveryOptions";
class Cart {
    cartItems;
    // Inorder to avoid someone else who can change thi Key
    //We use # for changing it as private
    #localStorageKey;
    // To Run the object we created below inside the class object 
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage(); 
    }
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    
    if(!this.cartItems){
        this.cartItems = [
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

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    addToCart(productId) {
        let matchingIterm;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingIterm = cartItem;
            }
        });

        if (matchingIterm) {
            matchingIterm.quantity += 1;
        }else{
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingIterm;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingIterm = cartItem;
            }
        });
        
        matchingIterm.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
        
    }
};

// This parameter cart-oop && cart-business is
//  saved in localStorageKey of constroctor
const cart = new Cart('cart-oop');
const cartVegetable = new Cart('cart-vegetable');
const businessCart = new Cart('cart-business');

// To Run the object outside the class object
/*
const cart = new Cart();
const businessCart = new Cart();


cart.localStorageKey = 'cart-oop';
businessCart.localStorageKey = 'cart-business';

cart.loadFromStorage(); 
businessCart.loadFromStorage();
*/


console.log(cart)
console.log(businessCart)
console.log(cartVegetable)
// To check if an Object is in instance
console.log(businessCart instanceof Cart)
 
    