export const deliveryOptions = [{
    id: '1',
    deliveryTime: 7,
    deliveryPriceCents: 0
},
{
    id: '2',
    deliveryTime: 3,
    deliveryPriceCents: 499
},
{
    id: '3',
    deliveryTime: 1,
    deliveryPriceCents: 999
}];
export function getDeliveryOption (deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((Option) => {
        if (Option.id === deliveryOptionId) {
            deliveryOption = Option;
        };
    });
    return deliveryOption;
};   