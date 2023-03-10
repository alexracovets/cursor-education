const productsWrapper = document.getElementById("result");

productsWrapper.insertAdjacentHTML("beforeEnd",
    `
    <div class="item">
        Число N - <span>${numberN}</span>
    </div>
    <div class="item">
        Число M - <span>${numberM}</span>
    </div>
    <div class="item">
        Чи були враховані парні числа при складенні чисел? -  <span>${isSkipEven ? 'Ні' : 'Так'}</span>
    </div>
    <div class="item">
       Результат -  <span>${resultSum}</span>
    </div>
    `
);