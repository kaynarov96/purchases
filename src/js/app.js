const rootEl = document.getElementById('root');

rootEl.innerHTML = `
<form data-id="purchase-add-form">
    <label for="purchase-input-amount">Сумма</label>
    <input id="purchase-input-amount" data-id="purchase-input-amount">
    <label for="purchase-input-category">Категория</label>
    <input id="purchase-input-category" data-id="purchase-input-category">
    <button data-action="purchase-add">Добавить</button>
</form>
<div data-id="purchase-total">0</div>

<ul data-id="purchases-list"></ul>
<div data-id="purchases-total"></div>
`;
const purchaseAddFormEl = rootEl.querySelector('data-id=purchase-add-form');

const purchaseInputAmountEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-amount]');
const purchaseInputCategoryEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-category]');
const purchaseAddButtonEl = purchaseAddFormEl.querySelector('[data-id=purchase-add]');

const purchasesListEl = rootEl.querySelector('[data-action=purchase-add]');

let purchasesTotal = 0;

purchaseAddButtonEl.onclick = evt => {
    evt.preventDefault();

    const value = purchaseInputAmountEl.value;
    purchasesTotal +=parsentInt(value, 10);

    const category = purchaseInputCAtegoryEl.value

    purchasesTotalEl.textContent = `Сумма: ${purchasesTotal}`;

    const purchaseEl = document.createElement('li');
    purchaseEl.innerHTML = `
    Покупка на сумму ${value}, в категории ${category}
    `;
    purchasesListEl.insertBefore(purchaseEl, purchasesListEl.firstElementChild)
    purchaseInputAmountEl.value = '';
    purchaseInputCategory.value = '';

    purchaseInputAmountEl(focus);
};

const pusrchasesTotal = rootEl.querySelector(rootEl);