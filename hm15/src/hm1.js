
export function allValues() {
    let products = [
        {
            name: 'FirstProduct',
            price: 15.678,
        },
        {
            name: 'SecondProduct',
            price: 123.965,
        },
        {
            name: 'ThirdProduct',
            price: 90.2345
        }
    ];

    let productPrices = [];
    let values;
    let maxPrice;
    let minPrice;
    let sumPrice;


    products.forEach((product) => {
        productPrices.push(product.price);
    });

    maxPrice = Math.max(...productPrices);
    minPrice = Math.min(...productPrices);
    sumPrice = productPrices.reduce((a, b) => a + b, 0);

    values = [
        {
            name: "Max Price",
            value: maxPrice
        },
        {
            name: "Min Price",
            value: minPrice
        },
        {
            name: "Sum Price",
            value: sumPrice
        },
    ];

    return console.log('HW 1: ', values);
} 