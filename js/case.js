document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newQuantity = getQuantity('case-field', true);
    updatePrice('total-case-price', 49,  newQuantity.value);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newQuantity = getQuantity('case-field', false);
    updatePrice('total-case-price', 49,  newQuantity.value);
    calculateSubTotal();
})

// document.getElementById('case-remove').addEventListener('click', function () {
//     removeElement('total-case-price', 0);
// })