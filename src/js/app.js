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
`;
const purchaseAddFormEl = rootEl.querySelector('data-id=purchase-add-form');

const purchaseInputAmountEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-amount]');
const purchaseInputCategoryEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-category]');
const purchaseAddButtonEl = purchaseAddFormEl.querySelector('[data-id=purchase-add]');

let purchasesTotal = 0;

purchaseAddButtonEl.onclick = evt => {
    evt.preventDefault();

    const value = purchaseInputAmountEl.value;
    purchasesTotal +=parsentInt(value, 10);
    purchasesTotalEl.textContent = `Сумма: ${purchasesTotal}`;

    purchaseInputAmountEl.value = '';
};

const pusrchasesTotal = rootEl.querySelector(rootEl);