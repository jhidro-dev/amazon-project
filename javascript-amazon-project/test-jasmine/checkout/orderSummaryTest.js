import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart} from '../../data/cart.js';

describe('Test Suite: renderOrderSummary', () => {
    it('Displays the Cart', () => {
        document.querySelector('.js-test-container').innerHTML =
         ` <div class="js-order-summary"></div>`;
         const productId2 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
         const productId1 = '54e0eccd-8f36-462b-b68a-8182611d9add';
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                productId: productId1,
                quantity: 1,
                deliveryOptionId: '2'
                },
                {
                productId: productId2,
                quantity: 2,
                deliveryOptionId: '2'
                }
            ]);
        });
        loadFromStorage();

        renderOrderSummary();

        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        expect(
            document.querySelector(`.js-product-quantity-${productId1}`)
            .innerText
        ).toContain('Quantity: 1');
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`)
            .innerText
        ).toContain('Quantity: 2');
    });

    it('Removes a product', () => {
        document.querySelector('.js-test-container').innerHTML =
         ` <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>`;
         const productId2 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
         const productId1 = '54e0eccd-8f36-462b-b68a-8182611d9add';
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                productId: productId1,
                quantity: 1,
                deliveryOptionId: '2'
                },
                {
                productId: productId2,
                quantity: 2,
                deliveryOptionId: '2'
                }
            ]);
        });
        loadFromStorage();
        renderOrderSummary();


        document.querySelector(`js-delete-link-${productId2}`);
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);
        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
            
        ).toEqual(null);
        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
            
        ).toEqual(null);
        

    });
})