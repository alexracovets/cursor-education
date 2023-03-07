// Products

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

//  Values

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
console.log(values);

// Values Floor

let productPricesFloor = [];
let sumPriceFloor;
let hundredPriceFloor;
let isSumPriceFloorEven;
let valuesFloor;

products.forEach((product) => {
    productPricesFloor.push(Math.floor(product.price));
});

sumPriceFloor = productPricesFloor.reduce((a, b) => a + b, 0);
hundredPriceFloor = sumPriceFloor <= 100 ? 100 : Math.ceil(sumPriceFloor / 100) * 100;
isSumPriceFloorEven = sumPriceFloor % 2 == 0 ? true : false;
remainder = 500 - sumPrice;

valuesFloor = [
    {
        name: "Sum Price Floor",
        value: sumPriceFloor
    },
    {
        name: "Rounding To Hundred",
        value: hundredPriceFloor
    },
    {
        name: "Floored Sum Is Even?",
        value: isSumPriceFloorEven
    },
    {
        name: "The Rest From 500 ₴(not rounding)",
        value: remainder
    }
];
console.log(valuesFloor);

// Avarage Price

let avaragePrice;

avaragePrice = [
    {
        name: 'FirstProduct',
        value: Number(15.678.toFixed(2)),
    },
    {
        name: 'SecondProduct',
        value: Number(123.965.toFixed(2)),
    },
    {
        name: 'ThirdProduct',
        value: Number(90.2345.toFixed(2))
    }
]
console.log(avaragePrice)

// Discount/Profit

let discount;
let purchasePrice;
let toPaid;
let costOfProduct;
let saleProfit
let profit;

discount = (Math.random() * 100).toFixed(0);
purchasePrice = Number(sumPrice.toFixed(2));
toPaid = Number((purchasePrice - purchasePrice * discount / 100).toFixed(2));
costOfProduct = Number(purchasePrice / 2);
saleProfit = Number((toPaid - costOfProduct).toFixed(2));

profit = [
    {
        name: 'Your Discount',
        value: discount + '%'
    },
    {
        name: 'Purchase Price',
        value: purchasePrice
    },
    {
        name: 'To Be Paid',
        value: toPaid
    },
    {
        name: 'Cost Price Of Product',
        value: costOfProduct
    },
    {
        name: 'Sales Profit',
        value: saleProfit
    }
]
console.log(profit)
