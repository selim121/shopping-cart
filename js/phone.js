document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newQuantity = getQuantity('phone-field', true);
    updatePrice('total-phone-price', 1499, newQuantity.value);
    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newQuantity = getQuantity('phone-field', false);
    updatePrice('total-phone-price', 1499, newQuantity.value);
    calculateSubTotal();
})

// document.getElementById('phone-remove').addEventListener('click', function () {
//     removeElement('total-phone-price', 0);
// })