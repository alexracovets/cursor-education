// Render Products

const productsWrapper = document.getElementById("products");

products.forEach(product => {
    productsWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item">
                <div class="item-product">
                    <img src="img/product.svg">
                </div>
                <div class="item-name">
                    ${product.name}
                </div>
                <div class="item-price">
                    ${product.price} ₴
                </div>
            </div>
        `
    );
});

// Render Values

const valuesWrapper = document.getElementById("values");

values.forEach(product => {
    valuesWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item">
                <div class="item-name">
                    ${product.name}
                </div>
                <div class="item-price">
                    ${product.value} ₴
                </div>
            </div>
        `
    );
});

// Render Values Floor

const valuesFloorWrapper = document.getElementById("valuesFloor");

valuesFloor.forEach(product => {

    let typeValue = typeof (product.value);

    valuesFloorWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item">
                <div class="item-name">
                    ${product.name}
                </div>
                <div class="item-price">
                    ${product.value} ${typeValue === 'number' ? ' ₴' : ''}
                </div>
            </div>
        `
    );
});


// Render Avarage Price

const avaragePriceWrapper = document.getElementById("avaragePrice");

avaragePrice.forEach(product => {

    let typeValue = typeof (product.value);

    avaragePriceWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item">
                <div class="item-name">
                    ${product.name}
                </div>
                <div class="item-price">
                    ${product.value} ${typeValue === 'number' ? ' ₴' : ''}
                </div>
            </div>
        `
    );
});


// Discount/Profit

const discountProfitWrapper = document.getElementById("discountProfit");

profit.forEach(product => {

    let typeValue = typeof (product.value);

    discountProfitWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item">
                <div class="item-name">
                    ${product.name}
                </div>
                <div class="item-price">
                    ${product.value} ${typeValue === 'number' ? ' ₴' : ''}
                </div>
            </div>
        `
    );
});